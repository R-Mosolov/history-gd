// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Styles
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green, red } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import '../pages/style.css';

// Public pages
import Main from '../pages/additional-pages/main/main';
import Registration from '../pages/additional-pages/registration/registration';
import Login from '../pages/additional-pages/login/login';

// Private pages
// TODO: Create index.js to resize a path to each of components
import LeftNavigation from './left-navigation/left-navigation';
import { UserAgreement } from '../pages/additional-pages';
import {
  Manuscripts,
  FullManuscript,
  HandlingSources,
  AddManuscript,
  DataAnalysis,
  AudioGenerator,
  Diary,
  Heritage,
} from '../pages/main-pages';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readAllManuscripts } from '../store/action-creators';

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ readAllManuscripts }, dispatch),
  };
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: green[500],
      dark: green[600],
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: red[600],
      dark: red[700],
      contrastText: '#fff',
    },
  },
});

class App extends Component {
  render() {
    const { isAuthenticated, isRegistered } = this.props.store;

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="app mb-5">
            <main className="header-place">
              {isAuthenticated ? (
                <>
                  {/* Public pages */}
                  <Route path="/" exact component={Main} />
                  <Route path="/registration" component={Registration} />
                  <Route path="/login" component={Login} />
                  <Redirect to={isAuthenticated ? '/manuscripts' : '/login'}>
                    <Route path="/login" component={Login} />
                  </Redirect>

                  {/* Private pages */}
                  <Route path="/left-navigation" component={LeftNavigation} />
                  <Route path="/manuscripts" component={Manuscripts} />
                  <Route path="/full-manuscript" component={FullManuscript} />
                  <Route path="/handling-sources" component={HandlingSources} />
                  <Route path="/add-manuscript" component={AddManuscript} />
                  <Route path="/data-analysis" component={DataAnalysis} />
                  <Route path="/audio-generator" component={AudioGenerator} />
                  <Route path="/diary" component={Diary} />
                  <Route path="/heritage" component={Heritage} />
                  <Route path="/user-agreement" component={UserAgreement} />
                </>
              ) : (
                <>
                  {/* Public pages */}
                  <Route path="/" exact component={Main} />
                  <Route path="/registration" component={Registration} />
                  <Route path="/login" component={Login} />
                  <Redirect to={isRegistered ? '/login' : '/registration'}>
                    <Route path="/login" component={Login} />
                  </Redirect>

                  {/* TODO: Add page to handle errors */}
                </>
              )}
            </main>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
