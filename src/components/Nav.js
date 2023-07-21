import '../App.css';
import logo from "../images/logo.png";

function Nav() {
    return(
        <nav>
            <img className="logo" src={logo} alt="little lemon logo" width="200px"/>
            <ul>
                <li>
                    <a href="./">Home</a>
                    <a href="/About">About</a>
                    <a href="/About">Menu</a>
                    <a href="/About">Reservations</a>
                    <a href="/About">Order Online</a>
                    <a href="/About">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;