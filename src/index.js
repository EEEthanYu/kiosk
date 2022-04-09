import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from "./store.js";
import { Provider } from 'react-redux';

import Docu2 from "./docu2/docu2"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Docu2/>
    </Provider>
  </React.StrictMode>
  ,document.getElementById('root')
);