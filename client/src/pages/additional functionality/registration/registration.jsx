import React from "react";

import "./registration.css";

function Registration() {
    return (
        <div className="registration mt-5 mb-5 d-flex justify-content-center container">
            <div className="w-lg-50">
                <h1>Регистрация на сайте</h1>

                <div>
                    <div className="d-flex flex-column mb-3">
                        <label>1. Фамилия</label>
                        <input type="text" min="2" max="75" placeholder="Ломоносов"/>
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <label>2. Имя</label>
                        <input type="text" min="2" max="75" placeholder="Михаил"/>
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <label>3. Отчество</label>
                        <input type="text" min="2" max="75" placeholder="Васильевич"/>
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <label>4. Email (электронная почта)</label>
                        <input type="email" min="3" max="75" placeholder="MV.Lomonosov@msu.ru"/>
                    </div>
                    <div className="d-flex flex-column mb-4">
                        <label>5. Моб. телефон</label>
                        <input type="number" min="10" max="11" placeholder="+7 (999) 999-99-99"/>
                    </div>
                    <div className="d-flex flex-column mt-4 mb-3">
                        <label>6. Полное название ВУЗ'а, в котором Вы работаете</label>
                        <input type="text" min="3" max="75" placeholder="Московский Государственный Университет"/>
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <label>8. Учёное звание</label>
                        <input type="text" min="3" max="75" placeholder="Профессор"/>
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <label>9. Учёная степень</label>
                        <input type="text" min="3" max="75" placeholder="Академик СПбАН"/>
                    </div>
                    <div className="d-flex flex-column">
                        <label>10. Научно-исследовательские интересы</label>
                        <input type="text" min="3" max="75" placeholder="Мозаичное дело, изобретение ночезрительных труб"/>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="mt-3 btn btn-success btn-block">Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
}

export default Registration;
