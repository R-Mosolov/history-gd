import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "./logo/logo";

class TopNavigation extends Component {
  constructor(props) {
    super(props);

    this.checkPageForWorkArea = this.checkPageForWorkArea.bind(this);
    this.checkPageForLogo = this.checkPageForLogo.bind(this);

    this.state = {
      btnToWorkArea: (
        <Link to="/login">
          <button
            className="on-work-table mr-lg-4 btn btn-warning"
            onClick={this.checkPageForWorkArea}
          >
            Рабочий стол
          </button>
        </Link>
      ),
    };
  }

  checkPageForWorkArea() {
    const isMainPage = window.location.pathname === "/";

    if (isMainPage) {
      this.setState({
        btnToWorkArea: <div />,
      });
    }
  }

  checkPageForLogo() {
    const isMainPage = window.location.pathname === "/";

    if (isMainPage) {
      this.setState({
        btnToWorkArea: (
          <Link to="/manuscripts">
            <button
              className="on-work-table mr-lg-4 btn btn-warning"
              onClick={this.checkPageForWorkArea}
            >
              Рабочий стол
            </button>
          </Link>
        ),
      });
    }
  }

  render() {
    return (
      <header className="fixed-top vw-100 bg-white">
        <div className="top-navigation d-flex justify-content-between pt-2 pb-2 shadow-sm">
          <div onClick={this.checkPageForLogo}>
            <Logo />
          </div>

          <div className="mr-3">{this.state.btnToWorkArea}</div>
        </div>
      </header>
    );
  }
}

export default TopNavigation;
