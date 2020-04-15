import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./app.css";
import "../pages/style.css";

import TopNavigation from "./top-navigation/top-navigation";

import Main from "../pages/additional-pages/main/main";
import Registration from "../pages/additional-pages/registration/registration";

import LeftNavigation from "./left-navigation/left-navigation";
import Manuscripts from "../pages/main-pages/manuscripts/manuscripts";
import FullManuscript from "./full-manuscript/full-manuscript";
import AddManuscript from "../pages/main-pages/add-manuscript/add-manuscript";
import Diary from "../pages/main-pages/diary/diary";
import Heritage from "../pages/main-pages/heritage/heritage";

import "../states/index";

function App() {
  return (
    <Router>
      <div className="app mb-5">
        <TopNavigation />

        <main className="header-place">
          <Route path="/" exact component={Main} />
          <Route path="/registration" component={Registration} />

          <Route path="/left-navigation" component={LeftNavigation} />
          <Route path="/manuscripts" component={Manuscripts} />
          <Route path="/full-manuscript" component={FullManuscript} />
          <Route path="/add-manuscript" component={AddManuscript} />
          <Route path="/diary" component={Diary} />
          <Route path="/heritage" component={Heritage} />
        </main>
      </div>
    </Router>
  );
}

export default App;
