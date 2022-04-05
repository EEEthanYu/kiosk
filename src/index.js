import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Radio from "./Components/Radio"
import store from "./store.js"
import { Provider } from 'react-redux'

const relations = ["본인","배우자","부","모","자녀","며느리","사위","시부","시모","기타"];

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Radio title="세대주와의 관계" RadioName="relation" labels={relations} />
    </Provider>
  </React.StrictMode>
  ,document.getElementById('root')
);