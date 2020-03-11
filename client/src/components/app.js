import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./logo/logo";
import Main from "../pages/main";

class App extends Component {
  render() {
    return (
        <div className="app">
            <div className="shadow-sm">
                <Logo/>
            </div>

            <Main/>
        </div>
    );
  }
}

export default App;
