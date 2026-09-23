import { useState } from "react";
import { GiGuitarHead } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const categorias = ["Guitarras", "Bajos", "Baterías", "Teclados", "Accesorios"];

function Navbar() {
  // controla si el menu esta abierto en celulares
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="navbar">
      <a href="#" className="navbar-logo" onClick={cerrarMenu}>
        <GiGuitarHead size={28} />
        <span>Instrumenta</span>
      </a>

      <nav className={menuAbierto ? "navbar-menu abierto" : "navbar-menu"}>
        <ul className="navbar-categorias">
          {categorias.map((categoria) => (
            <li key={categoria}>
              <a href="#" onClick={cerrarMenu}>
                {categoria}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar-acciones">
        <CartWidget />
        <button
          className="navbar-hamburguesa"
          onClick={toggleMenu}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
