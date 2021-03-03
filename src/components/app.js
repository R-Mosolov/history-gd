// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import '../pages/style.css';

// Public pages
import Main from '../pages/additional-pages/main/main';
import Registration from '../pages/additional-pages/registration/registration';
import Login from '../pages/additional-pages/login/login';

// Private pages
import LeftNavigation from './left-navigation/left-navigation';
import Manuscripts from '../pages/main-pages/manuscripts/manuscripts';
import FullManuscript from '../pages/main-pages/full-manuscript/full-manuscript';
import HandlingSources from '../pages/main-pages/handling-sources/handling-sources';
import AddManuscript from '../pages/main-pages/add-manuscript/add-manuscript';
import AudioGenerator from '../pages/main-pages/audio-generator/audio-generator';
import Diary from '../pages/main-pages/diary/diary';
import Heritage from '../pages/main-pages/heritage/heritage';
import UserAgreement from '../pages/additional-pages/user-agreement/user-agreement';

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

class App extends Component {
  render() {
    const { isAuthenticated } = this.props.store;

    return (
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
                <Redirect to={isAuthenticated ? '/manuscripts' : '/registration'}>
                  <Route path="/login" component={Login} />
                </Redirect>

                {/* TODO: Add page to handle errors */}
              </>
            )}
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
