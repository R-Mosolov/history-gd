import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../pages/style.css";

import Logo from "./logo/logo";
import Main from "../pages/main/main";
import Registration from "../pages/registration/registration";

function App() {
    return (
        <Router>
            <div className="app mb-5">
                <div className="shadow-sm"><Logo/></div>

                <Route path="/" exact component={Main}/>
                <Route path="/registration" component={Registration}/>
            </div>
        </Router>
    );
}

export default App;
