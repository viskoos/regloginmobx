import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class Login extends Component {
  render() {
    const {} = this.props.store
    return(
      <div>
        Login page
      </div>
    )
  }
}

export default Login
