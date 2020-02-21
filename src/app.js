import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Styleguide from './components/StyleGuide/StyleGuide';
import Team from './components/Team/Team';
import Authors from './components/Authors/Authors';
import Worklog from './components/Worklog/Worklog';
import AuthorDescription from './components/AuthorDescription/AuthorDescription';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Authors from './Authors';
import Main from './Main';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/authors">
              <Authors />
            </Route>
            <Route path="/authors/:id">
              <AuthorDescription />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/worklog">
              <Worklog />
            </Route>
            <Route path="/styleguide">
              <Styleguide />
            </Route>
          </Switch>
          <Footer />
      </Router>
    )
  }
}

export default App;
