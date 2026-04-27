// TUS PDFs (edita aquí)
const pdfsPorSemana = {
    '1-1': [
        { nombre: 'MANUAL DE COMO CREAR CUENTA GITHUB.pdf', desc: 'Estructura HTML' },
        { nombre: 'MANUEL DE COMO SUBIR TU PRIMERA PAGINA.pdf', desc: 'Estilos básicos' },
        { nombre: 'RESUMEN SEMANA 01.pdf', desc: 'Estilos básicos' }
    ],
    '1-2': [
        { nombre: 'diagramas entidad realcion.pdf', desc: 'Layout flexible' },
        { nombre: 'MANUAL DE INSTALACION DE SQL SERVER.pdf', desc: 'Práctica' }
    ],
    '1-3': [
        { nombre: 'Flexbox.pdf', desc: 'Layout flexible' },
        { nombre: 'Ejercicio1.pdf', desc: 'Práctica' }
    ],
    '1-4': [
        { nombre: 'Informe_Tecnico_Semana_04.pdf', desc: 'Informe Tecnico' }
      
    ],
    
    // AGREGAS MÁS ASÍ:
    // '1-3': [
    //     { nombre: 'grid.pdf', desc: 'CSS Grid' }
    // ],
    '2-1': [
        { nombre: 'MANUAL DE COMO CREAR CUENTA GITHUB.pdf', desc: 'Estructura HTML' },
        { nombre: 'MANUEL DE COMO SUBIR TU PRIMERA PAGINA.pdf', desc: 'Estilos básicos' },
        { nombre: 'RESUMEN SEMANA 01.pdf', desc: 'Estilos básicos' }
    ], 
    '2-2': [
        { nombre: 'Flexbox.pdf', desc: 'Layout flexible' },
        { nombre: 'Ejercicio1.pdf', desc: 'Práctica' }
    ],
    '2-3': [
        { nombre: 'Flexbox.pdf', desc: 'Layout flexible' },
        { nombre: 'Ejercicio1.pdf', desc: 'Práctica' }
    ],
    '2-4': [
        { nombre: 'Flexbox.pdf', desc: 'Layout flexible' },
        { nombre: 'Ejercicio1.pdf', desc: 'Práctica' }
    ],
    '3-1': [
        { nombre: 'MANUAL DE COMO CREAR CUENTA GITHUB.pdf', desc: 'Estructura HTML' },
        { nombre: 'MANUEL DE COMO SUBIR TU PRIMERA PAGINA.pdf', desc: 'Estilos básicos' },
        { nombre: 'RESUMEN SEMANA 01.pdf', desc: 'Estilos básicos' }
    ], // Vacía = sin PDFs
    '3-2': [
        { nombre: 'MANUAL DE COMO CREAR CUENTA GITHUB.pdf', desc: 'Estructura HTML' },
        { nombre: 'MANUEL DE COMO SUBIR TU PRIMERA PAGINA.pdf', desc: 'Estilos básicos' },
        { nombre: 'RESUMEN SEMANA 01.pdf', desc: 'Estilos básicos' }
    ], 
    '3-3': [
        { nombre: 'MANUAL DE COMO CREAR CUENTA GITHUB.pdf', desc: 'Estructura HTML' },
        { nombre: 'MANUEL DE COMO SUBIR TU PRIMERA PAGINA.pdf', desc: 'Estilos básicos' },
        { nombre: 'RESUMEN SEMANA 01.pdf', desc: 'Estilos básicos' }
    ], 
    '3-4': [
        { nombre: 'MANUAL DE COMO CREAR CUENTA GITHUB.pdf', desc: 'Estructura HTML' },
        { nombre: 'MANUEL DE COMO SUBIR TU PRIMERA PAGINA.pdf', desc: 'Estilos básicos' },
        { nombre: 'RESUMEN SEMANA 01.pdf', desc: 'Estilos básicos' }
    ], 
    '4-1': [
        { nombre: 'MANUAL DE COMO CREAR CUENTA GITHUB.pdf', desc: 'Estructura HTML' },
        { nombre: 'MANUEL DE COMO SUBIR TU PRIMERA PAGINA.pdf', desc: 'Estilos básicos' },
        { nombre: 'RESUMEN SEMANA 01.pdf', desc: 'Estilos básicos' }
    ], 
    '4-2': [
        { nombre: 'MANUAL DE COMO CREAR CUENTA GITHUB.pdf', desc: 'Estructura HTML' },
        { nombre: 'MANUEL DE COMO SUBIR TU PRIMERA PAGINA.pdf', desc: 'Estilos básicos' },
        { nombre: 'RESUMEN SEMANA 01.pdf', desc: 'Estilos básicos' }
    ], 
    '4-3': [
        { nombre: 'MANUAL DE COMO CREAR CUENTA GITHUB.pdf', desc: 'Estructura HTML' },
        { nombre: 'MANUEL DE COMO SUBIR TU PRIMERA PAGINA.pdf', desc: 'Estilos básicos' },
        { nombre: 'RESUMEN SEMANA 01.pdf', desc: 'Estilos básicos' }
    ], 
    '4-4': [
        { nombre: 'MANUAL DE COMO CREAR CUENTA GITHUB.pdf', desc: 'Estructura HTML' },
        { nombre: 'MANUEL DE COMO SUBIR TU PRIMERA PAGINA.pdf', desc: 'Estilos básicos' },
        { nombre: 'RESUMEN SEMANA 01.pdf', desc: 'Estilos básicos' }
    ], 
    
};

init();

function init() {
    document.querySelectorAll('.semana').forEach(btn => {
        btn.onclick = () => showWeek(btn.dataset.semana);
    });
    
    document.querySelector('.close').onclick = () => {
        document.getElementById('modalSemana').style.display = 'none';
    };
}

function showWeek(id) {
    const pdfs = pdfsPorSemana[id] || [];
    
    let contenido = `
        <div class="semana-header">
            <h2><i class="fas fa-folder-open"></i> Semana ${id}</h2>
            <p>Documentos disponibles</p>
        </div>
        <div class="semana-content">
    `;
    
    if (pdfs.length === 0) {
        contenido += `
            <div style="text-align:center;padding:4rem;color:#94a3b8">
                <i class="fas fa-file-pdf" style="font-size:6rem;opacity:0.3"></i>
                <h3>No hay PDFs</h3>
                <p>Agrega archivos en script.js</p>
            </div>
        `;
    } else {
        pdfs.forEach((pdf, index) => {
            contenido += `
                <div style="margin-bottom:2rem;padding:2rem;background:white;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,0.1)">
                    <h3 style="color:#1e293b;margin-bottom:1rem">${pdf.nombre}</h3>
                    <p style="color:#64748b;margin-bottom:1.5rem">${pdf.desc}</p>
                    <div style="display:flex;gap:1rem">
                        <iframe src="pdfs/${pdf.nombre}#toolbar=1&view=FitH" 
                                style="flex:1;height:400px;border-radius:12px;box-shadow:0 5px 20px rgba(0,0,0,0.1)"></iframe>
                        <div style="display:flex;flex-direction:column;gap:1rem">
                            <a href="pdfs/${pdf.nombre}" target="_blank" 
                               style="background:#3b82f6;color:white;padding:12px 20px;border-radius:12px;text-decoration:none;text-align:center;font-weight:500">
                                📥 Descargar
                            </a>
                            <button onclick="expandirPDF('${pdf.nombre}')" 
                                    style="background:#10b981;color:white;padding:12px 20px;border:none;border-radius:12px;cursor:pointer;font-weight:500">
                                🔍 Ver completo
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    contenido += '</div>';
    
    document.getElementById('contenidoSemana').innerHTML = contenido;
    document.getElementById('modalSemana').style.display = 'block';
}

function expandirPDF(nombre) {
    window.open(`pdfs/${nombre}`, '_blank');
}
