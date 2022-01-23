import "./NavBar.css";
import Logo from "../../media/logoracing.png"
import CartWidget from "../CartWidget"
import React from "react";

function NavBar() {
    return <nav>
        <header className="header">
            <img className="header_logo" src={Logo} alt="logo"/>
            
            <nav className="header_nav">
                <a className="nav_enlace" href="#locales">Locales</a>
                <a className="nav_enlace" href="#contacto">Contacto</a>
                <a className="nav_enlace" href="#seguinos">Seguinos</a>
            </nav>

            <CartWidget />

        </header>
    </nav>
}
export default NavBar;