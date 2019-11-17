import React from "react";
import { NavBarButtonStyles, NavBarDropStyles } from "../styles/NavBarButtonStyles";

export const NavBarButton = props => (
    <NavBarButtonStyles className="toggle-button" onClick={props.click}>
        <div className="button-line" />
        <div className="button-line" />
        <div className="button-line" />
    </NavBarButtonStyles>
);

export const NavBarDrop = props => {
    return <NavBarDropStyles click={props.click}></NavBarDropStyles>;
};
