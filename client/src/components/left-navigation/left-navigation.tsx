// Core
import * as React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Box from '@material-ui/core/Box';
import BlockIcon from '@material-ui/icons/Block';

// Data
import { v4 as uuidv4 } from 'uuid';
import leftNavigation from '../../data/left-navigation.json';

// Styles
import './left-navigation.css';

function LeftNavigation() {
  function renderLeftNav() {
    let itemsList = [];
    for (let item of leftNavigation) {
      itemsList.push(
        item.done ? (
          <Link key={uuidv4()} to={item.link}>
            <li className="left-nav__container--item">{item.name}</li>
          </Link>
        ) : (
          <Box
            display="flex"
            alignItems={'center'}
            ml={2}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              alert(
                'К сожалению, данный раздел пока не готов. Вернитесь к нему, пожалуйста, позднее.'
              )
            }
          >
            <BlockIcon color={'error'} />
            <li className="left-nav__container--item">{item.name}</li>
          </Box>
        )
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
