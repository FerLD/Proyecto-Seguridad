import React from 'react';
import { useNavigate } from "react-router-dom";
import "../assets/css/Header.css";

export default function Header() {

    const navigate = useNavigate();

    return (
        <header>
            <div>
                <img src="/Icon-peligro.png" className="Icon-titulo" alt="icono peligro" />
            </div>
            
            <h1 className='titulo'>SAVIG — Sistema de Análisis de Violencia en Guanajuato</h1>

            <nav className='botones-inicio'>
                <button onClick={() => navigate("/")}>Inicio</button>
                <button onClick={() => navigate("/nosotros")}>Acerca</button>
            </nav>
        </header>
    );
}
