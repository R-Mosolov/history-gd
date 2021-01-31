import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import '../pages/style.css';

import Main from '../pages/additional-pages/main/main';
import Registration from '../pages/additional-pages/registration/registration';
import Login from '../pages/additional-pages/login/login';

import LeftNavigation from './left-navigation/left-navigation';
import Manuscripts from '../pages/main-pages/manuscripts/manuscripts';
import FullManuscript from '../pages/main-pages/full-manuscript/full-manuscript';
import HandlingSources from '../pages/main-pages/handling-sources/handling-sources';
import AddManuscript from '../pages/main-pages/add-manuscript/add-manuscript';
import AudioGenerator from '../pages/main-pages/audio-generator/audio-generator';
import Diary from '../pages/main-pages/diary/diary';
import Heritage from '../pages/main-pages/heritage/heritage';
import ErrorMessage from '../pages/additional-pages/error-message/error-message';
import UserAgreement from '../pages/additional-pages/user-agreement/user-agreement';

import { connect } from 'react-redux';
import { MANUSCRIPTS } from '../constants';
import db from '../server/db';

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    let manuscriptsList = [];

    db
      .collection(MANUSCRIPTS)
      .get()
      .then((docs) => docs.forEach((doc) => manuscriptsList.push(doc.data())))
      .then(() => {
        this.props.setInitialState(manuscriptsList);
        this.setState({ loading: false });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { loading } = this.state;
    
    return (
      <Router>
        <div className="app mb-5">
          <main className="header-place">
            <Route path="/" exact component={Main} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/error-message" component={ErrorMessage} />
            <Route path="/user-agreement" component={UserAgreement} />
  
            <Route path="/left-navigation" component={LeftNavigation} />
            <Route path="/manuscripts" component={Manuscripts} loading={loading} />
            <Route path="/full-manuscript" component={FullManuscript} />
            <Route path="/handling-sources" component={HandlingSources} />
            <Route path="/add-manuscript" component={AddManuscript} />
            <Route path="/audio-generator" component={AudioGenerator} />
            <Route path="/diary" component={Diary} />
            <Route path="/heritage" component={Heritage} />
          </main>
        </div>
      </Router>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialState: (payload) => dispatch({ type: 'SET_INITIAL_STATE', payload }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
