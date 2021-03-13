import * as React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './left-navigation.css';
import leftNavigation from '../../data/components/left-navigation.json';

function LeftNavigation() {
  function renderLeftNav() {
    let itemsList = [];
    for (let item of leftNavigation) {
      itemsList.push(
        <Link key={uuidv4()} to={item.link}>
          <li className="left-nav__container--item">{item.name}</li>
        </Link>
      );
    }
    return itemsList;
  }

  return (
    <div className="left-nav col-lg-3">
      <div className="left-nav__container pt-5 d-flex flex-column col-lg-3">
        <ul className="list-unstyled">{renderLeftNav()}</ul>
        <Link style={{ color: 'rgba(0, 0, 0, 0.7)' }} to="/user-agreement">
          <span
            style={{
              marginLeft: '22px',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Пользовательское соглашение
          </span>
        </Link>
      </div>
    </div>
  );
}

export default LeftNavigation;
