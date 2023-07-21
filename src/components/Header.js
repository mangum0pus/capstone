import logo from "../images/logo.png"

function Header() {
    return(
        <header>
            <img src={logo} alt="little lemon logo" width="100px"/>
            <h1>Hello</h1>
        </header>
    )
}

export default Header;