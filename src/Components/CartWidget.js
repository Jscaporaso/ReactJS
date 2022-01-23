import React from 'react'
import Carrito from "../media/carrito2.jfif"


const CartWidget = () => {
    return (
        <div className="header_carrito">
            <li className="carrito">
                <img className="carrito_img" src={Carrito} alt="carrito" />
                <p className="carrito_number" id="carrito_number">X</p>
            </li>
        </div>    
    )
}

export default CartWidget
