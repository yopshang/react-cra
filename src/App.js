import {CartContext} from './store'
import './assets/scss/all.scss'
import Navbar from './components/Navbar';
import Products from './components/Product';
import Carts from './components/Cart';
import { useReducer } from 'react';


function App() {
  const CartReducer = useReducer((state, action)=>{
    console.log(action)
    switch (action.type) {
      default:
        return state;
    }
  },{
      cartList: []
  })
  return (
    <CartContext.Provider value={CartReducer} className="App">
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

        </div>
    </CartContext.Provider>
  );
}

export default App;
