import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import './App.css'

@inject('store')
@observer
class App extends Component {
  render() {

    const {viewUsers, users} = this.props.store

    return(
      <div>
        <button onClick={viewUsers}>view</button>
        {
          users.map((item, index) => {
            return (
              <div className="user-card" key={index}>
                <div className="user-card-item">Login: <li>{item.login}</li></div>
                <div className="user-card-item">Password: <li>{item.password}</li></div>
                <div className="user-card-item">Name: <li>{item.name}</li></div>
                <div className="user-card-item">Last Name: <li>{item.lastName}</li></div>
                <div className="user-card-item">Age: <li>{item.age}</li></div>
                <div className="user-card-item">ID: <li>{item._id}</li></div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App
