import React, { useState } from "react";
import Search from "./Search";
import NavBar from "./NavBar";
import { NavBarButton, NavBarDrop } from "./NavBarButton";
import { HeaderStyles } from "../styles/HeaderStyles";

const Header = props => {
    const [navToggle, setNavToggle] = useState(false);

    // Setting Navigation bar(NavBar) toggle
    const handleNavToggle = () => setNavToggle(!navToggle);
    const navDropHandler = () => setNavToggle(false);

    return (
        <HeaderStyles>
            <div data-setid="logo-div" className="logo-div">
                <h1 data-setid="logo-h1">Weather App</h1>
            </div>

            <div className="title-div">
                <h2 data-setid="title-h2">{props.pageTitle}</h2>
            </div>

            <div className="group-addon">
                {props.pageTitle == "Weather Details" || props.pageTitle == "About" ? (
                    <div> </div>
                ) : (
                    <Search
                        className="search-comp"
                        onChange={props.onChange}
                        onSubmit={props.onSubmit}
                    />
                )}
                <NavBarButton className="navbar-button" click={handleNavToggle} />
            </div>
            {navToggle && <NavBarDrop click={navDropHandler} />}
            {navToggle && <NavBar />}
        </HeaderStyles>
    );
};

export default Header;
