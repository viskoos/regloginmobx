import {observable} from 'mobx'

class Store {
  @observable title = 'Hello from MobX'

}

export const store = new Store()
