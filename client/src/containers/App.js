import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class App extends Component {
  render() {

    const {title} = this.props.store

    return(
      <div>
        Test
      </div>
    )
  }
}

export default App
