import {observable, action} from 'mobx'

class Store {
  @observable login = ''
  @observable password = ''
  @observable users = []

  @action.bound changeLogin(e) {
    this.login = e.target.value
  }

  @action.bound changePassword(e) {
    this.password = e.target.password
  }

  @action.bound accLogin() {
    this.users.map(item => {
      if(this.login === item.login) {
        alert('Est takoe')
      }
    })
  }
}

export const store = new Store()
