import "./NavBar.css";
import Logo from "../../media/logoracing.png"
import CartWidget from "../CartWidget"

function NavBar() {
    return <nav>
        <header class="header">
            <img class="header_logo" src={Logo} alt="logo"/>
            
            <nav class="header_nav">
                <a class="nav_enlace" href="#locales">Locales</a>
                <a class="nav_enlace" href="#contacto">Contacto</a>
                <a class="nav_enlace" href="#seguinos">Seguinos</a>
            </nav>

            <CartWidget />

        </header>
    </nav>
}
export default NavBar;