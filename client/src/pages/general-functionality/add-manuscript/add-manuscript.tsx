import React from "react";

import "./add-manuscript.css";

import LeftNavigation from "../../../components/left-navigation/left-navigation";

function AddManuscript() {
    return (
        <div className="add-manuscript">
            <div className="d-flex">
                <LeftNavigation/>

                <div className="col-lg-9">
                    <h1 className="mt-5 mb-5 text-center">Добавить новую рукопись</h1>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Тип работы</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Выбрать...</option>
                            <option value="1">Научная публикация</option>
                            <option value="2">Тезисы конференции</option>
                            <option value="3">Учебник</option>
                            <option value="3">Монография</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Название работы</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Происхождение видов путём естественного отбора"
                               aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Автор(-ы) работы</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Дарвин Ч." aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Научное направление</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Выбрать...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Текст работы</span>
                        </div>
                        <textarea className="manuscript-content form-control" aria-label="With textarea"/>
                    </div>

                    <div className="input-group mt-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with checkbox"
                               value="Разрешить публичный доступ к рукописи" disabled/>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="mt-3 btn btn-success">Создать рукопись</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddManuscript;
