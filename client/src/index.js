import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react'

import App from './containers/App'
import {store} from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
