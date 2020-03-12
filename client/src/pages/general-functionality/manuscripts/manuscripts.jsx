import React from "react";
import {Link} from "react-router-dom";

import "./manuscripts.css";

import LargeManuscript from "./img/large-manuscript.svg";
import SmallManuscript from "./img/small-manuscript.svg";

function Manuscripts() {
    return (
        <div className="manuscripts">
            <div className="d-flex">
                <div className="col-lg-3">
                    <div className="left-navigation d-flex align-items-center">
                        <ul className="list-unstyled">
                            <Link to="/manuscripts"><li className="left-navigation__item">Список рукописей</li></Link>
                            <Link to="/manuscripts"><li className="left-navigation__item">Добавить рукопись</li></Link>
                            <Link to="/manuscripts"><li className="left-navigation__item">Обработка источников</li></Link>
                            <Link to="/manuscripts"><li className="left-navigation__item">Наследники рукописей</li></Link>
                            <Link to="/manuscripts"><li className="left-navigation__item">Научное становление</li></Link>
                            <Link to="/manuscripts"><li className="left-navigation__item">Научная переписка</li></Link>
                            <Link to="/manuscripts"><li className="left-navigation__item">Рукописи коллег</li></Link>
                            <Link to="/manuscripts"><li className="left-navigation__item">Научный самоанализ</li></Link>
                            <Link to="/manuscripts"><li className="left-navigation__item">Контакты коллег</li></Link>
                            <Link to="/manuscripts"><li className="left-navigation__item">Научный коллектив</li></Link>
                            <Link to="/manuscripts"><li className="left-navigation__item">Личный дневник</li></Link>
                            <Link to="/manuscripts"><li className="left-navigation__item">Мультимедийные факты</li></Link>
                        </ul>
                    </div>
                </div>

                <div className="worktable col-lg-9">
                    <h1 className="mt-5 mb-5 text-center">Список рукописей</h1>

                    <h2 className="mb-4">Выберите, что оставить:</h2>
                    <ul className="d-flex justify-content-around list-unstyled">
                        <li className="large-manuscripts d-flex align-items-center">
                            <img className="m-2" src={LargeManuscript} style={{height: 150 + "px", width: 150 + "px"}}/>
                            <span className="custom-font">Крупные работы (монографии, учебники и др.)</span>
                        </li>
                        <li className="small-manuscripts d-flex align-items-center">
                            <img className="m-2" src={SmallManuscript} style={{height: 200 + "px", width: 200 + "px"}}/>
                            <span className="custom-font">Малые работы (статьи, тезисы докладов и др.)</span>
                        </li>
                    </ul>

                    <h2 className="mt-4 mb-4">Список с учётом фильтра:</h2>
                    <ul className="list-unstyled">
                        <li>ФИО автора. Название рукописи</li>
                        <li>ФИО автора. Название рукописи</li>
                        <li>ФИО автора. Название рукописи</li>
                        <li>ФИО автора. Название рукописи</li>
                        <li>ФИО автора. Название рукописи</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Manuscripts;
