import React from "react";
import { Link } from "react-router-dom";
import { NavBarStyles } from "../styles/NavBarStyles";

const NavBar = () => {
    return (
        <NavBarStyles>
            <nav className="route-nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className="nav-li">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </NavBarStyles>
    );
};

export default NavBar;
