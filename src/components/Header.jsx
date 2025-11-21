export default function Header() {
    return (
        <header>
            <img src="/Icon-peligro.png" className="Icon-titulo" alt="icono peligro" />

            <h1>SAVIG — Sistema de Análisis de Violencia en Guanajuato</h1>

            <nav className='botones-inicio'>
                <button>Inicio</button>
                <button>Acerca</button>
            </nav>
        </header>
    );
}
