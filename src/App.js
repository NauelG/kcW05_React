import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Users, Login, NotFound, Profile, User, Header, Footer } from './components/componentsModule';
import { connect } from 'react-redux';
import { ProtectedRoute } from './utils/ProtectedRoute'

const AppView = ({login}) =>
  <React.Fragment>
    {
      login &&
      <Header/>
    }
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute auth={login} path="/profile" component={Profile} />
        <ProtectedRoute auth={login} path="/user/:id" component={User} />
        <ProtectedRoute auth={login} exact path="/" component={Users} />
        <ProtectedRoute auth={login} component={NotFound} />
      </Switch>
    </BrowserRouter>
    {
      login &&
      <Footer/>
    }
  </React.Fragment>

const mapStateToProps = state => ({
    login: state.login
})
const App = connect(mapStateToProps)(AppView);

export default App;
