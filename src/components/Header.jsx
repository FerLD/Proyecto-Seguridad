import React from 'react';
import "../assets/css/Header.css";

export default function Header() {
    return (
        <header>
            <div>
                <img src="/Icon-peligro.png" className="Icon-titulo" alt="icono peligro" />
            </div>
            
            <h1 className='titulo'>SAVIG — Sistema de Análisis de Violencia en Guanajuato</h1>

            <nav className='botones-inicio'>
                <button>Inicio</button>
                <button>Acerca</button>
            </nav>
        </header>
    );
}
