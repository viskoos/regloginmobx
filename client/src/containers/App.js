import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class App extends Component {
  render() {

    const {viewUsers, users} = this.props.store
    console.log(users)

    return(
      <div>
        <button onClick={viewUsers}>view</button>
      </div>
    )
  }
}

export default App
