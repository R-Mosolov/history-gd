import React from "react";

import "./login.css";
import "../../../lib/form-validator/render-error";
import validateForm from "./functions/validate-form";

function Login() {
  return (
    <div className="login mt-5 mb-5 d-flex justify-content-center align-items-center container">
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
          onClick={() => validateForm()}
        >
          Войти
        </button>
      </div>
    </div>
  );
}

export default Login;
