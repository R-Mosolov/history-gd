import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

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

import { createStore } from 'redux';
// import store from '../store/index.store';
import { MANUSCRIPTS } from '../constants';
import db from '../server/db';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import '../pages/style.css';

class App extends Component {
  state = {
    initialState: [],
    store: [],
    reducer: (state = this.state.initialState, action) => {
      const { type } = action;
  
      switch (type) {
        case 'CLEAR_STATE':
          state = [];
          return state;
  
        default:
          console.log('this.state.reducer by default');
          return this.state.initialState;
      }
    },
  };

  componentDidMount() {
    console.log('componentDidMount BEGIN');

    let initialState = [];

    db
      .collection(MANUSCRIPTS)
      .get()
      .then((docs) => docs.forEach((doc) => initialState.push(doc.data())))
      .then(() => this.setState({
        initialState: initialState,
        loading: false,
      }))
      .then(() => console.log('componentDidMount END'))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Provider store={createStore(this.state.reducer)}>
        <Router>
          <div className="app mb-5">
            <main className="header-place">
              <Route path="/" exact component={Main} />
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
              <Route path="/error-message" component={ErrorMessage} />
              <Route path="/user-agreement" component={UserAgreement} />
  
              <Route path="/left-navigation" component={LeftNavigation} />
              <Route path="/manuscripts" component={Manuscripts} />
              <Route path="/full-manuscript" component={FullManuscript} />
              <Route path="/handling-sources" component={HandlingSources} />
              <Route path="/add-manuscript" component={AddManuscript} />
              <Route path="/audio-generator" component={AudioGenerator} />
              <Route path="/diary" component={Diary} />
              <Route path="/heritage" component={Heritage} />
            </main>
          </div>
        </Router>
      </Provider>
    );
  };
}

export default App;
