import React from "react";
import { Link } from "react-router-dom";

import "./left-navigation.css";

function LeftNavigation() {
  return (
    <div className="left-nav col-lg-3">
      <div className="left-nav__container pt-5 d-flex flex-column col-lg-3">
        <ul className="list-unstyled">
          <Link to="/manuscripts">
            <li className="left-nav__container--item">Список рукописей</li>
          </Link>
          <Link to="/add-manuscript">
            <li className="left-nav__container--item">Добавить рукопись</li>
          </Link>
          <Link to="/manuscripts">
            <li className="left-nav__container--item">Обработка источников</li>
          </Link>
          <Link to="/heritage">
            <li className="left-nav__container--item">Наследники рукописей</li>
          </Link>
          <Link to="/manuscripts">
            <li className="left-nav__container--item">Научное становление</li>
          </Link>
          <Link to="/manuscripts">
            <li className="left-nav__container--item">Научная переписка</li>
          </Link>
          <Link to="/manuscripts">
            <li className="left-nav__container--item">Рукописи коллег</li>
          </Link>
          <Link to="/manuscripts">
            <li className="left-nav__container--item">Научный самоанализ</li>
          </Link>
          <Link to="/manuscripts">
            <li className="left-nav__container--item">Контакты коллег</li>
          </Link>
          <Link to="/manuscripts">
            <li className="left-nav__container--item">Научный коллектив</li>
          </Link>
          <Link to="/diary">
            <li className="left-nav__container--item">Личный дневник</li>
          </Link>
          <Link to="/manuscripts">
            <li className="left-nav__container--item">Мультимедийные факты</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default LeftNavigation;
