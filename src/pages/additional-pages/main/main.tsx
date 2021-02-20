import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './main.css';
import TopNavigation from '../../../components/top-navigation/top-navigation';

interface Props {
  store: any;
}

const mapStateToProps = (state: object) => {
  return {
    store: state,
  };
};

class Main extends Component<Props, {}> {
  render() {
    const { isAuthenticated } = this.props.store;

    return (
      <div className="main mb-5">
        <TopNavigation
          btnOnWorkArea={
            <Link to={isAuthenticated ? '/manuscripts' : '/login'}>
              <button className="on-work-table mr-lg-4 btn btn-warning">
                {isAuthenticated ? 'Рабочий стол' : 'Войти в систему'}
              </button>
            </Link>
          }
          isWorkArea={false}
        />

        <div className="banner d-flex justify-content-center align-items-center">
          <div>
            <h1 className="title container">История гениального открытия</h1>
          </div>
        </div>

        <div className="mt-5 container about-service">
          <p>
            <b>«История гениального открытия»</b> (сокр. <i>«history-gd»</i> или{' '}
            <i>«GitHub для ученых»</i>) – это бесплатный, научный сервис,
            который был создан в стенах Казанского (Приволжского) федерального
            университета для помощи учёным в хранении собственных рукописей
            (например, научных статей, университетских учебников и монографий).
          </p>

          <p>Список запланированных функциональных возможностей SPA</p>
          <ul className="mb-4">
            <li>создание рукописей;</li>
            <li>хранение рукописей в качестве резервных копий в Интернете;</li>
            <li>конвертация рукописей в PDF для их печати;</li>
            <li>
              накопление больших данных о рукописях для поиска закономерностей
              открытия научных теорий;
            </li>
            <li>количественное дополнение теории Т. Куна;</li>
            <li>научный самоанализ;</li>
            <li>и др.</li>
          </ul>

          {isAuthenticated ? null : (
            <div className="d-flex justify-content-center">
              <Link to="/registration">
                <button className="btn btn-success">Зарегистрироваться</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
