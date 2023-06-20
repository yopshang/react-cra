import React from 'react';
import ReactDOM from 'react-dom/client';
// import './assets/index.css';  // cra環境 可直接匯入css 到 js中
import App from './App'; // cra 環境中可省略 .js
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode 會導致 useeffect 執行兩次, 只會在開發模式執行, 會影響運行哪些項目, 平常建議打開
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); // 這是分析工具(包含GA等) 註解起來也不會怎樣
