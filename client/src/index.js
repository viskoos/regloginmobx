import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx'

import App from './containers/App'
import {store} from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

  // УДАЛИТЬ NODE-SASS(ЕСЛИ НЕ УДАЛИЛСЯ)
  // ПРОВЕРИТЬ МОБХ
  // ДВА КОНТЭЙНЕРА ДЛЯ РЕГИ И ЛОГИНА
  // ПРИХУЯРИТЬ СТИЛИ (ЖЕЛАТЕЛЬНО САССОМ)
  // ПРОКИНУТЬ ВСЕ ЭТО ДЕЛО ЧЕРЕЗ МОБХ
  // ПРИХУЯРИТЬ СЕРВЕР
  // ПАРСИТЬ МОНГОДБ
