import {observable, action} from 'mobx'

class Store {
  @observable users = []

  @action.bound viewUsers() {
    fetch("/api/users")
      .then(res => res.json())
      .then(
        (results) => {
          this.users = results
        }
      )
  }
}

export const store = new Store()
