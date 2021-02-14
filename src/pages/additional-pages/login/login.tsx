// React
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import TopNavigation from "../../../components/top-navigation/top-navigation";

// Data
import { connect } from "react-redux";
import TYPES from "../../../store/types";
import { checkAuth } from "../../../server/auth";

// Styles
import "./login.css";

interface Props {
  setAuthentication: () => {};
  readAllManuscripts: () => {};
}

const { SET_AUTHENTICATION, READ_ALL_MANUSCRIPTS } = TYPES;

const mapStateToProps = (state: object) => {
  return {
    store: state,
  };
};

const mapDispatchToProps: any = (dispatch: (type: object) => object) => {
  return {
    setAuthentication: () => dispatch({ type: SET_AUTHENTICATION }),
    readAllManuscripts: () => dispatch({ type: READ_ALL_MANUSCRIPTS }),
  };
};

class Login extends Component<Props, { email: string, password: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({password: event.target.value});
  }

  handleAuth() {
    const { setAuthentication, readAllManuscripts } = this.props;

    const email = this.state.email;
    const password = this.state.password;

    if (email !== '' && password !== '') {
      checkAuth(email, password, setAuthentication, readAllManuscripts);
    }
  }

  render() {
    return (
      <div className="login mt-5 mb-5 d-flex justify-content-center align-items-center container">
        <TopNavigation
          btnOnWorkArea={
            <Link to="/registration">
              <button className="on-work-table mr-lg-4 btn btn-warning">
                Зарегистрироваться
              </button>
            </Link>
          }
          isWorkArea={false}
        />

        <div className="w-50">
          <h1 className="pt-5">Вход в систему</h1>

          <form id="login-form">
            <div className="d-flex flex-column mb-2">
              <label>Email (электронная почта)</label>
              <input
                value={this.state.email}
                id="login-page__email"
                className="form-control"
                type="email"
                min="3"
                max="75"
                placeholder="MV.Lomonosov@msu.ru"
                onChange={this.handleEmailChange}
              />
            </div>

            <div className="d-flex flex-column">
              <label>Пароль</label>
              <input
                value={this.state.password}
                id="login-page__password"
                className="form-control"
                type="password"
                min="8"
                max="50"
                placeholder="********"
                onChange={this.handlePasswordChange}
              />
            </div>
          </form>

          <button
            id="login-button"
            className="mt-3 btn btn-success btn-block"
            onClick={() => this.handleAuth()}
          >
            Войти
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
