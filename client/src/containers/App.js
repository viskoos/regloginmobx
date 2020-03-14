import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import './App.css'

import Main from './Main/Main'

@inject('store')
@observer
class App extends Component {
  render() {
    return(
      <div>
        <Main/>
      </div>
    )
  }
}

export default App