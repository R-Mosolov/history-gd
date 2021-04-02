import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogoIcon from '../../../assets/logo.svg';
import './logo.css';

function Logo() {
  const [logoText, setLogoText] = useState('История гениального открытия');
  useEffect(() => {
    Promise.resolve(fetch('http://localhost:4000'))
      .then((res) => res.json())
      .then((res) => setLogoText(res.logoText));
  });

  return (
    <Link to="/">
      <div className="ml-lg-3 mr-lg-3 d-flex">
        <img
          alt="Logo"
          src={LogoIcon}
          style={{ height: 50 + 'px', width: 50 + 'px' }}
        />
        <div className="d-flex align-items-center">
          <span className="logo-title">{logoText}</span>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
