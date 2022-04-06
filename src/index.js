import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Radio from "./Components/Radio"
import CheckBox from "./Components/CheckBox";
import Text from "./Components/Text";
import store from "./store.js";
import { Provider } from 'react-redux';
import Formatter from "./Utils/Formatter.js";
import SimpleCheck from './Components/SimpleCheck';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Radio title="세대주와의 관계" RadioName="relation" labels={["본인","배우자","부","모","자녀","며느리","사위","시부","시모","기타"]} />
      <CheckBox title="전입 사유" RadioName="reason" labels={["교육", "직장", "기타"]} />
      <Text title="성명" placeholder={"홍길동"} simpleCheck={<SimpleCheck title="성명 모름"></SimpleCheck>}></Text>
      <Text title="연락처" placeholder={"010-1234-5678"}></Text>
    </Provider>
  </React.StrictMode>
  ,document.getElementById('root')
);