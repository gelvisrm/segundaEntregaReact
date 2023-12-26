import React from 'react';
import "../style/Item.css";
import { Link } from 'react-router-dom';

const Item = ({ titulo, precio, id }) => {
    return (
        <div className="card">
            <div className="card-details">
                <p className="text-title">{titulo}</p>
                <p className="text-body">Precio: ${precio}</p>
            </div>
            <Link to={`/producto/${id}`}>
                <button className="card-button">Ver detalle</button>
            </Link>
        </div>
    )
}

export default Item