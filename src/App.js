
import axios from 'axios'

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/input';
import { useEffect, useState } from 'react';
import './assets/all.scss'

function App() {
  const [text, setText]  = useState('default')
  const onChangeHandler = (e)=>{
    setText(e.target.value)
  }
  useEffect(()=>{
  (async ()=>{ // 為何會觸發兩次?
    const users = await axios.get('https://randomuser.me/api');
    console.log(users)
  })()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <Input onChangeHandler={onChangeHandler} id={'haha'} text={text}></Input>
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" className="btn btn-primary">Primary</button>
        <p>
          loreme
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
