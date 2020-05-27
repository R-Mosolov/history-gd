import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import "../pages/style.css";

import setupDefaultAuth from "../pages/additional-pages/error-message/define-page-status/setup-default-auth";
import definePageStatus from "../pages/additional-pages/error-message/define-page-status/define-page-status";

import Main from "../pages/additional-pages/main/main";
import Registration from "../pages/additional-pages/registration/registration";
import Login from "../pages/additional-pages/login/login";

import LeftNavigation from "./left-navigation/left-navigation";
import Manuscripts from "../pages/main-pages/manuscripts/manuscripts";
import FullManuscript from "../pages/main-pages/full-manuscript/full-manuscript";
import SourceHandling from "../pages/main-pages/source-handling/source-handling";
import AddManuscript from "../pages/main-pages/add-manuscript/add-manuscript";
import AudioGenerator from "../pages/main-pages/audio-generator/audio-generator";
import Diary from "../pages/main-pages/diary/diary";
import Heritage from "../pages/main-pages/heritage/heritage";
import ErrorMessage from "../pages/additional-pages/error-message/error-message";

function App() {
  setupDefaultAuth();
  definePageStatus();

  return (
    <Router>
      <div className="app mb-5">
        <main className="header-place">
          <Route path="/" exact component={Main} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/error-message" component={ErrorMessage} />

          <Route path="/left-navigation" component={LeftNavigation} />
          <Route path="/manuscripts" component={Manuscripts} />
          <Route path="/full-manuscript" component={FullManuscript} />
          <Route path="/source-handling" component={SourceHandling} />
          <Route path="/add-manuscript" component={AddManuscript} />
          <Route path="/audio-generator" component={AudioGenerator} />
          <Route path="/diary" component={Diary} />
          <Route path="/heritage" component={Heritage} />
        </main>
      </div>
    </Router>
  );
}

export default App;
