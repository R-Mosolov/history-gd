import React from "react";
import {Link} from "react-router-dom";

import LogoIcon from "./logo.svg";
import "./logo.css";

function Logo() {
    return (
        <Link to="/">
            <div className="ml-lg-3 mr-lg-3 d-flex">
                <img className="" src={LogoIcon} style={{height: 50 + "px", width: 50 + "px"}}/>
                <div className="d-flex align-items-center">
                    <span className="logo-title">История гениального открытия</span>
                </div>
            </div>
        </Link>
    );
}

export default Logo;
