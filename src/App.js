import { useReducer } from 'react';
import {CartContext, CartReducer, cartInit} from './store'
import './assets/scss/all.scss'
import Navbar from './components/Navbar';
import Products from './components/Product';
import Carts from './components/Cart';
import MangerPage from './components/MangerPage';

function App() {

  const reducer = useReducer(CartReducer,cartInit); 
  // CartREducer原本就是一支function , 可整個拉到 store裡面後輸出
  // 預設值也可統一拉到 store處理

  return (
    <CartContext.Provider value={reducer} className="App">
        <Navbar></Navbar>
        <div className="container mt-4">
          <div className="row">
            <div className="col-8">
              <Products></Products>
            </div>
            <div className="col-4 bg-light p-3">
              <Carts></Carts>
            </div>
          </div>
          {
            <MangerPage></MangerPage>
          }

        </div>
    </CartContext.Provider>
  );
}

export default App;
