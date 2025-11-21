import { useState } from "react";

const municipiosGTO = [
    "Guanajuato",
    "León",
    "Irapuato",
    "Celaya",
    "Salamanca",
    "San Miguel de Allende",
    "Dolores Hidalgo",
    "Silao",
    "Acámbaro",
    "San Felipe",
];

export default function Buscador({ onSearch }) {
    const [texto, setTexto] = useState("");
    const [sugerencias, setSugerencias] = useState([]);

    const handleInput = (e) => {
        const value = e.target.value;
        setTexto(value);


        if (value.trim().length > 0) {
        const filtrados = municipiosGTO.filter((m) =>
            m.toLowerCase().includes(value.toLowerCase())
        );
        setSugerencias(filtrados);
        } else {
        setSugerencias([]);
        }
    };

    const seleccionar = (mun) => {
        setTexto(mun);
        setSugerencias([]);
    };

    const handleSearch = () => {
        if (!municipiosGTO.includes(texto)) {
        return alert("Selecciona un municipio válido de Guanajuato.");
        }
        onSearch(texto);
    };

    return (
        <div className="buscador">
        <h3>Buscar Municipio</h3>

        <input
            id="busqueda"
            value={texto}
            onChange={handleInput}
            placeholder="Escribe un municipio de GTO..."
            autoComplete="off"
        />

        {/* 🔹 Lista dinámica de sugerencias */}
        {sugerencias.length > 0 && (
            <div className="sugerencias">
            {sugerencias.map((m) => (
                <div key={m} onClick={() => seleccionar(m)}>
                {m}
                </div>
            ))}
            </div>
        )}

        <button onClick={handleSearch}>Buscar</button>
        </div>
    );
}
