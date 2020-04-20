import React from "react";

import "./login.css";

function Login() {
  return (
    <div className="login mt-5 mb-5 d-flex justify-content-center align-items-center container">
      <div className="w-50">
        <h1 className="pt-5">Вход в систему</h1>

        <form>
          <div className="d-flex flex-column mb-2">
            <label>Email (электронная почта)</label>
            <input
              type="email"
              min="3"
              max="75"
              placeholder="MV.Lomonosov@msu.ru"
            />
          </div>
          <div className="d-flex flex-column">
            <label>Пароль</label>
            <input type="password" min="8" max="50" placeholder="********" />
          </div>
        </form>

        <div className="d-flex justify-content-center">
          <button className="mt-3 btn btn-success btn-block">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
