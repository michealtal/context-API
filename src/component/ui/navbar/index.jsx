import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';

const NavLink = ({ to, item }) => {
    return (
        <li>
            <Link
                to={to}
                style={{textDecoration: "none" }}>
                {item}
            </Link>
        </li>
    );
}

function Navbar() {
    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const navDetail = [
        {navItem: "Home", path: "/"},
        {navItem: "About", path: "/about"},
        {navItem: "Community", path: "/community"},
        {navItem: "Faq", path: "/faq"}
    ];

    return (
        <nav style={{backgroundColor: "green", textAlign: "right", display: "flex", justifyContent: "space-between"}}>
            <ul
                style={{
                    textAlign: "right",
                    display: "flex",
                    gap: "20px",
                    listStyle: "none"
                }}
            >
                {navDetail.map((elem) => (
                    <NavLink 
                        key={elem.navItem}
                        to={elem.path}
                        item={elem.navItem}
                    />
                ))}
            </ul>
            { isAuthenticated ? <button onClick={logout}>Logout</button> : 
            <button onClick={login}>Login</button> }
        </nav>
    )
}

export default Navbar