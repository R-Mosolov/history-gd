import React from 'react';

import LeftNavigation from '../../../components/left-navigation/left-navigation';
import TopNavigation from '../../../components/top-navigation/top-navigation';

function Heritage() {
  return (
    <div className="heritage">
      <TopNavigation />

      <div className="d-flex">
        <LeftNavigation />

        <div className="col-lg-9">
          <div className="container">
            <h1 className="mt-5 text-center">Наследники рукописей</h1>

            <div className="mt-5 d-flex justify-content-between">
              <h2>Новый наследник</h2>
              <button className="btn btn-success">
                Добавить нового наследника
              </button>
            </div>

            <div className="mt-5">
              <div className="d-flex justify-content-between">
                <h2>Список наследников</h2>

                <div className="d-flex">
                  <div className="dropdown mr-lg-3">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenu2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Сортировать
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu2"
                    >
                      <button className="dropdown-item" type="button">
                        Action
                      </button>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </div>
                  </div>

                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenu2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Фильтровать
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu2"
                    >
                      <button className="dropdown-item" type="button">
                        Action
                      </button>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="mt-3 list-unstyled">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">№</th>
                      <th scope="col">Фамилия</th>
                      <th scope="col">Имя</th>
                      <th scope="col">Отчество</th>
                      <th scope="col">Email</th>
                      <th scope="col">Моб. телефон(-ы)</th>
                      <th scope="col">Тип наследника</th>
                      <th scope="col">Информация о наследнике</th>
                      <th scope="col">Адрес(-а) проживания</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <p>1</p>
                      </th>
                      <td>
                        <p>Иванов</p>
                      </td>
                      <td>
                        <p>Иван</p>
                      </td>
                      <td>
                        <p>–</p>
                      </td>
                      <td>
                        <p>I.Ivanov@mail.ru</p>
                      </td>
                      <td>
                        <p>+7 (999) 999-99-99</p>
                      </td>
                      <td>
                        <p>Дети</p>
                      </td>
                      <td>
                        <p>–</p>
                      </td>
                      <td>
                        <p>–</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ul>
              <button className="btn btn-success" id="btn-to-send-email">
                Отправить рукопись
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heritage;
