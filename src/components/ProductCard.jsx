import { useState } from "react";
import { FaStar } from "react-icons/fa";

function ProductCard({ nombre, descripcion, precio }) {
    // Estado local para la cantidad y el favorito del producto
    const [cantidad, setCantidad] = useState(0);
    const [favorito, setFavorito] = useState(false);

    // Funciones para manejar los eventos de cantidad y favorito
    const toggleFavorite = () => setFavorito(!favorito);
    const handleSumar = () => setCantidad(cantidad + 1);
    const handleRestar = () => cantidad > 0 && setCantidad(cantidad - 1);

    return (
        <article className="productCard">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <strong>${precio}</strong>
            <p>Cantidad: {cantidad}</p>
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleRestar}>Restar</button>
            <button onClick={toggleFavorite}><FaStar color={favorito ? "orange" : "black"} /></button>
        </article>
    );
}

export default ProductCard;
