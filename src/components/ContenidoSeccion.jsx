export default function ContenidoSeccion({ tipo, onBack }) {
    const info = {
        'Reportes ciudadanos': (
            <div className="secciones">
                <h2>Reportes Ciudadanos</h2>
                <h5>Qué es:</h5>
                <p>Son todas las denuncias, quejas o avisos enviados por habitantes del municipio a 
                    través de plataformas de reporte, líneas de atención o módulos presenciales.</p>
                <h5>Qué representa su valor:</h5>
                <p>El número indica cuántos reportes se registraron recientemente, lo que ayuda a 
                    cdidentificar zonas con mayor actividad, conflictos o situaciones que requieren atención del municipio.</p>
            </div>
        ),
        'Análisis estadístico': (
            <div>
                <h2>Análisis Estadístico</h2>
                <h5>Qué es</h5>
                <p>Son todas las denuncias, quejas o avisos enviados por habitantes del municipio a 
                    través de plataformas de reporte, líneas de atención o módulos presenciales.</p>
            </div>
        ),
        'Indicadores de riesgo': (
            <div>
                <h2>Indicadores de Riesgo</h2>
                <p>Factores que incrementan el riesgo en cada zona.</p>
            </div>
        ),
        'Alertas por zona': (
            <div>
                <h2>Alertas por Zona</h2>
                <p>Zonas con mayor nivel de alerta en tiempo real.</p>
            </div>
        ),
    };

    return (
        <div className="info-expandida">
            <button className="btn-regresar" onClick={onBack}>
                <i className="bi bi-arrow-left"></i> Volver al Panel
            </button>

            {info[tipo]}
        </div>
    );
}
