import React from "react";

import LogoIcon from "./logo.svg";
import "./logo.css";

function Logo() {
    return (
        <header className="logo pt-2 pb-2 container">
            <div className="d-flex">
                <img className="mr-lg-2" src={LogoIcon} style={{height: 50 + "px", width: 50 + "px"}}/>
                <div className="d-flex align-items-center">
                    <span className="logo-title">История гениального открытия</span>
                </div>
            </div>
        </header>
    );
}

export default Logo;
