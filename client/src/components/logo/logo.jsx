import React from "react";
import {Link} from "react-router-dom";

import LogoIcon from "./logo.svg";
import "./logo.css";

function Logo() {
    return (
        <header className="logo pt-2 pb-2">
            <Link to="/">
                <div className="d-flex">
                    <img className="ml-lg-3 mr-lg-3" src={LogoIcon} style={{height: 50 + "px", width: 50 + "px"}}/>
                    <div className="d-flex align-items-center">
                        <span className="logo-title">История гениального открытия</span>
                    </div>
                </div>
            </Link>
        </header>
    );
}

export default Logo;
