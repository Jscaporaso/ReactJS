import React from 'react'
import Carrito from "../media/carrito2.jfif"


const CartWidget = () => {
    return (
        <div class="header_carrito">
            <li class="carrito">
                <img class="carrito_img" src={Carrito} alt="carrito" />
                <p class="carrito_number" id="carrito_number">X</p>
            </li>
        </div>    
    )
}

export default CartWidget
