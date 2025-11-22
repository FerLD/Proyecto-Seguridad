import "../assets/css/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>SAVIG — Sistema de Análisis de Violencia en Guanajuato</p>
            <span className="footer-copy">© {new Date().getFullYear()} Todos los derechos reservados. ITESG</span>
        </footer>
    );
}
