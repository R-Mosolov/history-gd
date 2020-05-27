import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./login.css";
import "../../../lib/form-validator/render-error";
import validateForm from "./functions/validate-form";
import users from "../../../data/users";
import TopNavigation from "../../../components/top-navigation/top-navigation";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userList: users,
      email: "admin@test.ru",
      password: "Initial State Password",
      isCorrectData: false,
    };
  }

  checkAuthData() {
    this.setState({
      email: document.getElementById("login-page__email").value,
      password: document.getElementById("login-page__password").value,
    });

    users.forEach((user) => {
      if (user.email === this.state.email) {
        return <Link to="/manuscripts" />;
      }
    });

    // users.forEach(user => console.log(`user.email: ${user.email}`));
    // console.log(`this.state.email: ${this.state.email}`);
    // console.log(`this.state.password: ${this.state.password}`);
  }

  render() {
    return (
      <div className="login mt-5 mb-5 d-flex justify-content-center align-items-center container">
        <TopNavigation />

        <div className="w-50">
          <h1 className="pt-5">Вход в систему</h1>

          <form id="login-form">
            <div className="d-flex flex-column mb-2">
              <label>Email (электронная почта)</label>
              <input
                id="login-page__email"
                className="form-control"
                type="email"
                min="3"
                max="75"
                placeholder="MV.Lomonosov@msu.ru"
              />
            </div>

            <div className="d-flex flex-column">
              <label>Пароль</label>
              <input
                id="login-page__password"
                className="form-control"
                type="password"
                min="8"
                max="50"
                placeholder="********"
              />
            </div>
          </form>

          <button
            id="login-button"
            className="mt-3 btn btn-success btn-block"
            onClick={() => this.checkAuthData()}
          >
            Войти
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
