import { useReducer } from 'react';
import {Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import MangerPage from './components/MangerPage';
import VisitorPage from './components/VisitoerPage';
import Content from './components/Content';
import Setting from './components/Setting';
import {CartContext, CartReducer, cartInit} from './store'
import './assets/scss/all.scss'


function App() {

  const reducer = useReducer(CartReducer,cartInit); 
  // CartREducer原本就是一支function , 可整個拉到 store裡面後輸出
  // 預設值也可統一拉到 store處理

  return (
    <CartContext.Provider value={reducer} className="App">
        <Navbar></Navbar>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={< VisitorPage/>}></Route>
            <Route path="/mgr" element={<MangerPage/>}>
              <Route index element={<Content/>}></Route>
              <Route path="setting" element={<Setting/>}></Route>
            </Route>
          </Routes>
        </div>
    </CartContext.Provider>
  );
}

export default App;
