import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class App extends Component {
  render() {

    const {} = this.props.store

    return(
      <div>
      </div>
    )
  }
}

export default App
