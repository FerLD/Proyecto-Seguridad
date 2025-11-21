export default function MenuZonas({ onSelect }) {
    return (
        <ul className="Menu-zonas">
            <li onClick={() => onSelect('Reportes ciudadanos')} className='Reportes'>
                <i className="bi bi-exclamation-triangle-fill text-warning"></i> Reportes ciudadanos
            </li>

            <li onClick={() => onSelect('Análisis estadístico')} className='Reportes'>
                <i className="bi bi-bar-chart-fill text-primary"></i> Análisis estadístico
            </li>

            <li onClick={() => onSelect('Indicadores de riesgo')} className='Reportes'>
                <i className="bi bi-graph-up-arrow text-danger"></i> Indicadores de riesgo
            </li>

            <li onClick={() => onSelect('Alertas por zona')} className='Reportes'>
                <i className="bi bi-geo-alt-fill text-success"></i> Alertas por zona
            </li>
        </ul>
    );
}
