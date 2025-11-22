import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";

export default function App() {
  return (
    <BrowserRouter>
      {/* Header siempre visible */}
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>

      {/* Footer siempre visible */}
      <Footer />
    </BrowserRouter>
  );
}
