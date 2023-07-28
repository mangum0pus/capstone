import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import '../App.css';
import logo from "../images/logo.png";

export default function Nav() {
    return(
            <nav>
                <img className="logo" src={logo} alt="little lemon logo" width="200px"/>
                <ul>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/reserve">Reservations</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </ul>
            </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ''} aria-label="On click">
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}