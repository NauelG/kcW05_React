import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './assets/logo.svg';
import './App.css';
import { Users, Login, NotFound, Profile, User, Header, Footer } from './components/componentsModule';

const login = false;
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {
          login &&
          <Header/>
        }
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/user/:id" component={User} />
            <Route exact path="/" component={Users} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        {
          login &&
          <Footer/>
        }
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
