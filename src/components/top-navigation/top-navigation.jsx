import React, { Component } from "react";

import Logo from "./logo/logo";

class TopNavigation extends Component {
  render() {
    return (
      <header className="fixed-top vw-100 bg-white">
        <div className="top-navigation d-flex justify-content-between pt-2 pb-2 shadow-sm">
          <div>
            <Logo />
          </div>

          <div className="mr-3">{this.props.btnOnWorkArea}</div>
        </div>
      </header>
    );
  }
}

export default TopNavigation;
