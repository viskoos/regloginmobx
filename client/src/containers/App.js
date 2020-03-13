import React, {Component} from 'react'
import {observer, inject} from 'react-mobx'

@inject('store')
@observer
class App extends Component {
  render() {

    const {title} = this.props.store

    return (
      <div>
        Test
        {title}
      </div>
    )
  }
}

export default App
