import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import './App.css'

import Main from './Main/Main'

@inject('store')
@observer
class App extends Component {


  componentDidMount() {
    fetch("/api/users")
      .then(res => res.json())
      .then(
        (results) => {
          this.props.store.users = results
        }
      )
  }

  render() {
    return(
      <div>
        <Main/>
      </div>
    )
  }
}

export default App
