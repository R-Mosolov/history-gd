import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../pages/style.css";

import Logo from "./logo/logo";

import Main from "../pages/additional-functionality/main/main";
import Registration from "../pages/additional-functionality/registration/registration";

import LeftNavigation from "../components/left-navigation/left-navigation";
import Manuscripts from "../pages/general-functionality/manuscripts/manuscripts";
import Diary from "../pages/general-functionality/diary/diary";
import Heritage from "../pages/general-functionality/heritage/heritage";

function App() {
    return (
        <Router>
            <div className="app">
                <Logo/>

                <Route path="/" exact component={Main}/>
                <Route path="/registration" component={Registration}/>

                <Route path="/left-navigation" component={LeftNavigation}/>
                <Route path="/manuscripts" component={Manuscripts}/>
                <Route path="/diary" component={Diary}/>
                <Route path="/heritage" component={Heritage}/>
            </div>
        </Router>
    );
}

export default App;
