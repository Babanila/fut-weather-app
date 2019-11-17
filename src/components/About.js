import React from "react";
import Header from "./Header";
import { AboutStyles } from "../styles/AboutStyles";

const About = () => {
    return (
        <AboutStyles>
            <Header pageTitle="About" />
            <div className="about-div">
                <div className="about-div-section">
                    <h3>Components </h3>
                    <li> Header: Shows the title of the current page.</li>
                    <li>Drawer: It&apos;s used to navigate through the web application.</li>
                    <li>Main Page: The content goes here.</li>
                </div>

                <div className="about-div-section">
                    <h3>The functionalities</h3>
                    <li> Display all the weather available</li>
                    <li> Search the weather list using location city name e.g alska, ca etc.</li>
                    <li> Select a single location by click on it</li>
                </div>
            </div>
        </AboutStyles>
    );
};

export default About;
