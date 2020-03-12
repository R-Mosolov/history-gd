import React from "react";
import {Link} from "react-router-dom";

import "./manuscripts.css";

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

                    <ul className="list-unstyled">
                        <li>Крупные работы (монографии, учебники и др.)</li>
                        <li>Малые работы (статьи, тезисы докладов и др.)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Manuscripts;
