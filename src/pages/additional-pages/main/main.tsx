import React from "react";
import { Link } from "react-router-dom";

import "./main.css";

function Main() {
  return (
    <div className="main mb-5">
      <div className="banner d-flex justify-content-center align-items-center">
        <div>
          <h1 className="title container">История гениального открытия</h1>
        </div>
      </div>

      <div className="mt-5 container about-service">
        <p>
          <b>«История гениального открытия»</b> (сокр. <i>«history-gd»</i> или{" "}
          <i>«GitHub для ученых»</i>) – это бесплатный, научный сервис, который
          был создан в стенах Казанского (Приволжского) федерального
          университета для помощи учёным в хранении собственных рукописей
          (например, научных статей, университетских учебников и монографий).
        </p>

        <p>Список запланированных функциональных возможностей SPA</p>
        <ul className="mb-4">
          <li>создавая рукописи;</li>
          <li>хранение рукописей в качестве резервных копий в Интернете;</li>
          <li>создание рукописей в формате PDF для их распечатки;</li>
          <li>
            накопление больших данных о рукописях для поиска закономерностей
            научных открытий;
          </li>
          <li>научный самоанализ;</li>
          <li>и др.</li>
        </ul>

        <div className="d-flex justify-content-center">
          <Link to="/registration">
            <button className="btn btn-success">Зарегистрироваться</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
