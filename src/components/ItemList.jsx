import React from "react";
import Item from "./Item";
import "../style/style.css"


const ItemList = ({ productos }) => {
    return (
        <div className="contenedorItem">
            {
                productos.map((p) => {
                    return (
                        <Item
                            key={p.id}
                            titulo={p.titulo}
                            precio={p.precio}
                            descripcion={p.descripcion}
                            id={p.id}
                        />
                    )
                })
            }
        </div>
    )
}
export default ItemList