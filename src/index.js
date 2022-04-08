import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text1 from "./Containers/test/Text1";
import Text2 from "./Containers/test/Text2";
import store from "./store.js";
import { Provider } from 'react-redux';
import Formatter from "./Utils/Formatter.js";
import SimpleCheck from './Components/SimpleCheck';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Radio title="세대주와의 관계" RadioName="relation" labels={["본인","배우자","부","모","자녀","며느리","사위","시부","시모","기타"]} />
      <CheckBox title="전입 사유" RadioName="reason" labels={["교육", "직장", "기타"]} />*/}
      <Text1 title="이름" placeholder={"홍길동"}/>
      <Text2 title="연락처" placeholder={"010-1234-5678"}/>
    </Provider>
  </React.StrictMode>
  ,document.getElementById('root')
);