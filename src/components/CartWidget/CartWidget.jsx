import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

function CartWidget() {
  // por ahora la cantidad queda fija, despues se conecta con el carrito
  const cantidad = 3;

  return (
    <button className="cartWidget" aria-label="Ver carrito">
      <FaShoppingCart size={22} />
      <span className="cartWidget-badge">{cantidad}</span>
    </button>
  );
}

export default CartWidget;
