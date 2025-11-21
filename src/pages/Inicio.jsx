import { useState } from "react";

import Header from "../components/Header";
import Buscador from "../components/Buscador";
import MenuZonas from "../components/MenuZonas";
import ContenidoPanel from "../components/ContenidoPanel";
import ContenidoSeccion from "../components/ContenidoSeccion";
import "../assets/css/Inicio.css";

export default function Inicio() {
    const [seccionActiva, setSeccionActiva] = useState(null);
    const [resultados, setResultados] = useState(null);
    const [municipioBuscado, setMunicipioBuscado] = useState("");

    // Función que se ejecuta cuando se busca un municipio
    const buscar = (query) => {
        setMunicipioBuscado(query); // Guardar municipio

        // Datos ficticios
        const datos = {
            "Reportes ciudadanos": Math.floor(Math.random() * 100),
            "Análisis estadístico": {
                promedio: (Math.random() * 10).toFixed(2),
                desviacion: (Math.random() * 5).toFixed(2),
            },
            "Indicadores de riesgo": {
                bajo: Math.floor(Math.random() * 50),
                medio: Math.floor(Math.random() * 30),
                alto: Math.floor(Math.random() * 20),
            },
            "Alertas por zona": [
                { zona: "Zona Norte", alertas: Math.floor(Math.random() * 10) },
                { zona: "Zona Centro", alertas: Math.floor(Math.random() * 10) },
                { zona: "Zona Sur", alertas: Math.floor(Math.random() * 10) },
            ],
        };

        setResultados(datos);
    };

    return (
        <section className="inicio-container">
            <Header />

            <main>
                <section className="Filtros">
                    <h2>Zonas</h2>

                    <Buscador onSearch={buscar} />

                    <MenuZonas onSelect={(s) => setSeccionActiva(s)} />
                </section>

                <section className="Contenido">
                    {!seccionActiva
                        ? <ContenidoPanel />
                        : <ContenidoSeccion tipo={seccionActiva} onBack={() => setSeccionActiva(null)} />}
                </section>
            </main>
            
            {resultados && (
                <section className="ResultadosBusqueda">

                    <h3>
                        Resultados para el municipio: <span className="municipio-destacado">{municipioBuscado}</span>
                    </h3>

                    <div className="tarjetas">

                        {/* Reportes ciudadanos */}
                        <div className="tarjeta reportes">
                            <h4>Reportes ciudadanos</h4>
                            <p>{resultados["Reportes ciudadanos"]} reportes</p>

                            <div className="barra">
                                <div
                                    className="barra-llenada"
                                    style={{ width: `${Math.min(resultados["Reportes ciudadanos"], 100)}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Análisis estadístico */}
                        <div className="tarjeta analisis">
                            <h4>Análisis estadístico</h4>
                            <p>Promedio: {resultados["Análisis estadístico"].promedio}</p>
                            <p>Desviación estándar: {resultados["Análisis estadístico"].desviacion}</p>
                        </div>

                        {/* Indicadores de riesgo */}
                        <div className="tarjeta indicadores">
                            <h4>Indicadores de riesgo</h4>

                            {Object.entries(resultados["Indicadores de riesgo"]).map(([nivel, valor], idx) => (
                                <div key={idx} className="barra-nivel">
                                    <span>{nivel}</span>

                                    <div className="barra">
                                        <div
                                            className="barra-llenada"
                                            style={{ width: `${valor * 3}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Alertas por zona */}
                        <div className="tarjeta alertas">
                            <h4>Alertas por zona</h4>

                            {resultados["Alertas por zona"].map((zona, idx) => (
                                <p key={idx} className="alerta">
                                    {zona.zona}: {zona.alertas} alertas
                                </p>
                            ))}
                        </div>

                    </div>
                </section>
            )}
        </section>
    );
}

