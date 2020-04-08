import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "./logo/logo";

class TopNavigation extends Component {
  render() {
    const isMainPage = window.location.pathname === "/";

    function renderButtonOnWorkTable() {
      if (isMainPage) {
        return (
          <Link to="/manuscripts">
            <button className="on-work-table mr-lg-4 btn btn-warning">
              Рабочий стол
            </button>
          </Link>
        );
      }
    }

    return (
      <header className="fixed-top vw-100 bg-white">
        <div className="top-navigation d-flex justify-content-between pt-2 pb-2 shadow-sm">
          <Logo />

          {renderButtonOnWorkTable()}
        </div>
      </header>
    );
  }
}

export default TopNavigation;
