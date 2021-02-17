import React, { Component } from 'react';

import './error-message.css';
import '../../../lib/form-validator/render-error';
import TopNavigation from '../../../components/top-navigation/top-navigation';

class ErrorMessage extends Component {
  render() {
    return (
      <div className="login mt-5 mb-5 d-flex justify-content-center align-items-center container">
        <TopNavigation />

        <div className="w-50">
          <h1 className="pt-5">{this.props.errorTitle}</h1>

          <p>{this.props.errorDescriprion}</p>

          <button className="mt-3 btn btn-success btn-block">Войти</button>
        </div>
      </div>
    );
  }
}

export default ErrorMessage;
