import React, {Component} from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

import Login from '../Login/Login'
import Register from '../Register/Register'

import './Main.css'

class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="main-container">
            <div className="main-container__items">
              <Link to="/login" className="main-container__items__login-button">Login</Link>
                <p>Or</p>
              <Link to="/register" className="main-container__items__register-button">Register</Link>
            </div>
          </div>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Main
