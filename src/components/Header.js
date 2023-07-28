import logo from "../images/logo.png";
import '../App.css';

function Header() {
    return(
        <header>
            <img src={logo} alt="little lemon logo" width="100px"/>
        </header>
    )
}

export default Header;