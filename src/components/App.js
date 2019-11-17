import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import WeatherDetails from "./WeatherDetails";
import About from "./About";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/city/:id" component={WeatherDetails} />
                <Route path="/about" exact component={About} />
            </Switch>
        </Router>
    );
}

export default App;
