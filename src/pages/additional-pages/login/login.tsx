// Core
import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

// Material UI components
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Custom components
import TopNavigation from "../../../components/top-navigation/top-navigation";

// Data
import { connect } from "react-redux";
import TYPES from "../../../store/types";
import { bindActionCreators } from "redux";
import { readAllManuscripts } from "../../../store/action-creators";

// Styles
import "./login.css";

interface Props {
  setAuthentication: () => {};
  actions: {
    readAllManuscripts: any;
  };
}

const { SET_AUTHENTICATION, READ_ALL_MANUSCRIPTS } = TYPES;

const mapStateToProps = (state: object) => {
  return {
    store: state,
  };
};

const mapDispatchToProps: any = (dispatch: any) => {
  return {
    actions: bindActionCreators({ readAllManuscripts }, dispatch),
    setAuthentication: () => dispatch({ type: SET_AUTHENTICATION }),
  };
};

class Login extends Component<Props, { email: string, password: string }> {
  static defaultProps = {
    actions: {
      readAllManuscripts: () => {},
    },
  };

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
    const { setAuthentication } = this.props;
    const { readAllManuscripts } = this.props.actions;

    const email = this.state.email;
    const password = this.state.password;

    if (email !== '' && password !== '') {
      Promise.resolve(firebase.auth().signInWithEmailAndPassword(email, password))
        .then(() => console.log('Authenticated successfully!'))
        .then(() => setAuthentication())
        .then(() => readAllManuscripts())
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    }
  }

  render() {
    return (
      <Box className="login mt-5 mb-5 d-flex justify-content-center align-items-center container">
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

        <Box className="w-50">
          <Box mb={3}>
            <h1 className="pt-5" style={{ textAlign: "center" }}>Вход в систему</h1>
          </Box>

          <form id="login-form">
            <Box className="d-flex flex-column mb-2">
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
            </Box>

            <Box className="d-flex flex-column">
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
            </Box>
          </form>

          <button
            id="login-button"
            className="mt-3 btn btn-success btn-block"
            onClick={() => this.handleAuth()}
          >
            Войти
          </button>
          
          <Box display="flex" justifyContent="center" mt={2}>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                }
                label="Запомнить этот компьютер"
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" mt={-1}>
            <Typography
              variant="subtitle1"
              style={{
                textDecoration: 'underline',
                cursor: "pointer",
              }}
              gutterBottom
            >
              Забыли пароль?
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
