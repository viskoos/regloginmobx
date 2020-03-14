import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import './Login.css'

@inject('store')
@observer
class Login extends Component {
  render() {
    const {login, password, changeLogin, changePassword, accLogin} = this.props.store
    return(
      <div className="login-container">
        <div className="login-container-items">
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={changeLogin}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={changePassword}
          />
        <button onClick={accLogin}>login</button>
        </div>
      </div>
    )
  }
}

export default Login
