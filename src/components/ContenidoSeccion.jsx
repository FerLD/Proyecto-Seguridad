import React from 'react';
import "../assets/css/ContenidoSeccion.css";

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
            <div className="secciones">
                <h2>Análisis estadístico</h2>
                <h5>Qué es:</h5>
                <p>Es un cálculo automatizado que evalúa patrones y comportamientos dentro del municipio, basado en los datos recopilados.</p>
                <h5>Qué representa su valor:</h5>
                <p>Promedio: nivel general de actividad o incidencia registrada en la zona.
                    Desviación estándar: indica qué tan variable o inestable es la actividad; valores altos significan cambios bruscos entre días o zonas.
                    Esto permite entender si el municipio presenta una situación estable o fluctuante.</p>
            </div>
        ),
        'Indicadores de riesgo': (
            <div className="secciones">
                <h2>Indicadores de riesgo</h2>
                <h5>Qué es:</h5>
                <p>Son mediciones que clasifican el nivel de riesgo actual en distintas zonas del municipio, considerando factores como actividad inusual, 
                    reportes recientes y comportamiento histórico.</p>
                <h5>Qué representa su valor:</h5>
                <p>Los valores se dividen en bajo, medio y alto; cada uno refleja la cantidad de señales o eventos detectados que podrían representar un riesgo.
                    Entre mayor sea el valor, mayor es la presencia de situaciones que requieren seguimiento.</p>
            </div>
        ),
        'Alertas por zona': (
            <div className="secciones">
                <h2>Alertas por zona</h2>
                <h5>Qué es:</h5>
                <p>Son notificaciones generadas automáticamente cuando un área del municipio presenta condiciones que requieren atención o vigilancia especial.</p>
                <h5>Qué representa su valor:</h5>
                <p>La cantidad indica cuántas alertas activas existen por cada zona (Norte, Centro, Sur).
                    Un número alto significa mayor probabilidad de incidentes o situaciones que deben ser atendidas.</p>
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
