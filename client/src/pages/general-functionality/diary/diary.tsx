import React from "react";

import LeftNavigation from "../../../components/left-navigation/left-navigation";

function Diary() {
    return (
        <div className="diary">
            <div className="d-flex">
                <LeftNavigation/>

                <div className="diary__container col-lg-9">
                    <h1 className="mt-5 text-center">Личные дневники</h1>

                    <div className="mt-5 d-flex justify-content-between">
                        <h2>Новая запись</h2>
                        <button className="btn btn-success">Добавить новую запись</button>
                    </div>

                    <div className="mt-5">
                        <div className="d-flex justify-content-between">
                            <h2>Список записей</h2>

                            <div className="d-flex">
                                <div className="dropdown mr-lg-3">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Сортировать
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item" type="button">Action</button>
                                        <button className="dropdown-item" type="button">Another action</button>
                                        <button className="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>

                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Фильтровать
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item" type="button">Action</button>
                                        <button className="dropdown-item" type="button">Another action</button>
                                        <button className="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="mt-3 list-unstyled">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col"><p>№</p></th>
                                    <th scope="col"><p>Тематика</p></th>
                                    <th scope="col"><p>Название записи</p></th>
                                    <th scope="col"><p>ID записи</p></th>
                                    <th scope="col"><p>Дата создания</p></th>
                                    <th scope="col"><p>Дата последнего изменения</p></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row"><p>1</p></th>
                                    <td><p>Карьера</p></td>
                                    <td><p>Как прошла защита диссертации</p></td>
                                    <td><p>01-001</p></td>
                                    <td><p>01.01.2020</p></td>
                                    <td><p>01.01.2020</p></td>
                                </tr>
                                <tr>
                                    <th scope="row"><p>2</p></th>
                                    <td><p>Карьера</p></td>
                                    <td><p>Как прошла первая лекция по курсу ...</p></td>
                                    <td><p>01-002</p></td>
                                    <td><p>02.01.2020</p></td>
                                    <td><p>–</p></td>
                                </tr>
                                <tr>
                                    <th scope="row"><p>3</p></th>
                                    <td><p>Личная жизнь</p></td>
                                    <td><p>Знакомство с новым собеседником</p></td>
                                    <td><p>02-001</p></td>
                                    <td><p>03.01.2020</p></td>
                                    <td><p>–</p></td>
                                </tr>
                                </tbody>
                            </table>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Diary;
