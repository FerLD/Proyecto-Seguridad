import React from 'react';
import "../assets/css/Nosotros.css";

export default function Nosotros() {
    return (
        <div className="nosotros-container">

            <h1>Sobre el Proyecto</h1>
            <p className="nosotros-subtitulo">
                Conoce más sobre el propósito y el equipo detrás de SAVIG.
            </p>

            <div className="nosotros-section">
                <h2>¿Qué es SAVIG?</h2>
                <p>
                    SAVIG es un sistema diseñado para analizar información relacionada
                    con la actividad municipal en el estado de Guanajuato. Su objetivo
                    es permitir que cualquier usuario pueda visualizar tendencias,
                    indicadores y alertas de una manera clara, rápida y accesible.
                </p>
            </div>

            <div className="nosotros-section">
                <h2>Objetivo del Proyecto</h2>
                <p>
                    Reducir la incidencia de actos violentos mediante el uso de tecnologías emergentes que permitan detectar patrones delictivos, 
                    emitir alertas preventivas y fortalecer la seguridad ciudadana. 
                    La aplicación busca empoderar a la población con información útil, asistencia inmediata y mecanismos de autoprotección.
                </p>
            </div>

            <div className="nosotros-section">
                <h2>El Equipo</h2>

                {/* Nombres acomodados en cuadricula */}
                <div className="equipo-lista">                    
                    <div className="equipo-item">Fernando Lozano Durán</div>
                    <div className="equipo-item">Marco Antonio Alvarado Becerra</div>
                    <div className="equipo-item">Agustín Rodríguez Vega</div>
                    <div className="equipo-item">Brandon Alejandro Ruiz Cruces</div>
                    <div className="equipo-item">María Fernanda Velázquez García</div>
                </div>
                <br></br>
            </div>

        </div>
    );
}
