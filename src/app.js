import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Styleguide from './components/StyleGuide/StyleGuide';
import Team from './components/Team/Team';
import Authors from './components/Authors/Authors';
import Worklog from './components/Worklog/Worklog';
import AuthorDescription from './components/AuthorDescription/AuthorDescription';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  state = {
    id: null,
  }
  componentDidMount() {
    this.updateAuthor();
  }
  updateAuthor = () => {
    const date = new Date();
    const day = date.getDate();
    const AuthorId = day % 10 + 1;
    this.setState({
      id:AuthorId
    })
  };
  render() {
    const { id } = this.state;
    return (
      <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main id = {id}/>
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
