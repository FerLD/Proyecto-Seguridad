export default function ContenidoPanel() {
    return (
        <section>
            <div className="info-principal">
                <h2>Panel de Control SAVIG</h2>
                <p>
                    Este sistema permite analizar y visualizar información relacionada con la violencia y seguridad pública 
                    en el municipio de Guanajuato.
                </p>
            </div>

            <div className="info-section">
                <h3>Objetivo General</h3>
                <p>
                    Brindar una herramienta tecnológica de apoyo al análisis de datos sobre violencia,
                    para contribuir a la toma de decisiones.
                </p>
            </div>

            <div className="info-section">
                <h3>Indicadores Relevantes</h3>
                <ul>
                    <li>Tasa de homicidios por sector</li>
                    <li>Incidentes reportados en tiempo real</li>
                    <li>Niveles de riesgo según temporada</li>
                </ul>
            </div>
        </section>
    );
}
