import {CartContext} from './store'
import './assets/scss/all.scss'
import Navbar from './components/Navbar';
import Products from './components/Product';
import Carts from './components/Cart';
import { useReducer } from 'react';


function App() {
  const CartReducer = useReducer((state, action)=>{
    const cartList = [...state.cartList]
    const index = cartList.findIndex(item=>item.id === action.payload.id) // 若Id有重複，就不加入，第一次加入一定為 -1
    switch (action.type) {
      case 'ADD_TO_CART':{
        if(index === -1){
          cartList.push(action.payload)
        } else {
          cartList[index].quantity += action.payload.quantity
        }
        console.log(cartList)
        return {
          ...state,
          cartList
        }
      }
      case 'CHANGE_CART_QUANTITY':
        cartList[index].quantity = action.payload.quantity
        return {
          ...state,
          cartList
        }
      case 'DELETE':
        // const newCartList = cartList.filter(item=>item.id !== action.payload).map(item=>item)
        // return {
        //   ...state,
        //   cartList: newCartList
        // }
        cartList.splice(index, 1) // 這個效能比較好
        return {
        ...state,
          cartList
        }
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
