// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../server';

// Material UI components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Dialog window
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Custom components
import TopNavigation from '../../../components/top-navigation/top-navigation';

// Data
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { utils } from '../../../utils';
import { connect } from 'react-redux';
import TYPES from '../../../store/types';
import { bindActionCreators } from 'redux';
import { readAllManuscripts } from '../../../store/action-creators';
import { REGISTRATION_EMAIL, SERVICE_INFO, PASSWORD } from '../../../constants';

// Styles
import './login.css';

interface Props {
  setAuthentication: () => {};
  actions: {
    readAllManuscripts: any;
  };
}

interface ResetFormValues {
  emailToResetPassword: string;
}

const { SET_AUTHENTICATION } = TYPES;

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

class Login extends Component<
  Props,
  {
    emailToSignIn: string;
    emailToResetPassword: string;
    password: string;
    isResetDialog: boolean;
    test: string;
  }
> {
  static defaultProps = {
    actions: {
      readAllManuscripts: () => {},
    },
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      emailToSignIn: '',
      emailToResetPassword: '',
      password: '',
      isResetDialog: false,
      test: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  componentDidMount() {
    Promise.resolve(fetch('http://localhost:9999'))
      .then((res) => res.json())
      .then((res) => this.setState({ test: res.text }))
      .catch((err) => console.error(err));
  }

  handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ emailToSignIn: event.target.value });
  }

  handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  handleAuth() {
    const { setAuthentication } = this.props;
    const { readAllManuscripts } = this.props.actions;

    const email = this.state.emailToSignIn;
    const password = this.state.password;

    if (email !== '' && password !== '') {
      auth.checkAuth(email, password, setAuthentication, readAllManuscripts);
    }
  }

  render() {
    const { isResetDialog, emailToResetPassword } = this.state;

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
            <h1 className="pt-5" style={{ textAlign: 'center' }}>
              {/* Вход в систему */}
              {this.state.test}
            </h1>
          </Box>

          <form id="login-form">
            <Box className="d-flex flex-column mb-2">
              <label>Email (электронная почта)</label>
              <input
                value={this.state.emailToSignIn}
                id="login-page__email"
                className="form-control"
                type="email"
                min="3"
                max="75"
                placeholder={utils.getPlaceholderById(
                  REGISTRATION_EMAIL,
                  SERVICE_INFO
                )}
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
                placeholder={utils.getPlaceholderById(PASSWORD, SERVICE_INFO)}
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
                    inputProps={{
                      'aria-label': 'secondary checkbox',
                    }}
                  />
                }
                label="Доверять этому компьютеру"
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" mt={-1}>
            <Typography
              variant="subtitle1"
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              gutterBottom
              onClick={() =>
                this.setState({ isResetDialog: isResetDialog ? false : true })
              }
            >
              Забыли пароль?
            </Typography>
          </Box>

          <Dialog
            open={isResetDialog}
            onClose={() =>
              this.setState({ isResetDialog: isResetDialog ? false : true })
            }
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Сброс пароля</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Вы уверены, что хотите сбросить пароль? Если да, введите,
                пожалуйста, в поле ниже электронную почту, на которую
                зарегистрирован Ваш аккаунт в программном обеспечении.
              </DialogContentText>
              <Formik
                initialValues={{
                  emailToResetPassword: '',
                }}
                onSubmit={(
                  values: ResetFormValues,
                  { setSubmitting }: FormikHelpers<ResetFormValues>
                ) => {
                  auth.resetPassword(values.emailToResetPassword);
                  this.setState({
                    isResetDialog: isResetDialog ? false : true,
                  });
                  setSubmitting(false);
                }}
              >
                <Form>
                  <Field
                    id="emailToResetPassword"
                    name="emailToResetPassword"
                    className="form-control"
                    type="email"
                    minlength="3"
                    maxlength="75"
                    placeholder={utils.getPlaceholderById(
                      REGISTRATION_EMAIL,
                      SERVICE_INFO
                    )}
                    required={true}
                  />
                  <Box mt={2} mb={1}>
                    <DialogActions>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() =>
                          this.setState({
                            isResetDialog: isResetDialog ? false : true,
                          })
                        }
                      >
                        Отменить
                      </Button>
                      <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        size="small"
                      >
                        Сбросить пароль
                      </Button>
                    </DialogActions>
                  </Box>
                </Form>
              </Formik>
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
