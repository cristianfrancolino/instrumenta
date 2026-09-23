import { GiGuitarHead } from "react-icons/gi";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const categorias = ["Guitarras", "Bajos", "Baterías", "Teclados", "Accesorios"];

function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="navbar-logo">
        <GiGuitarHead size={28} />
        <span>Instrumenta</span>
      </a>

      <nav className="navbar-right">
        <ul className="navbar-categorias">
          {categorias.map((categoria) => (
            <li key={categoria}>
              <a href="#">{categoria}</a>
            </li>
          ))}
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}

export default Navbar;
