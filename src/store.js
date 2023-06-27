import { createContext, useReducer } from 'react';
export const CartContext = createContext({})
export const CartReducer = (state, action)=>{
  const cartList = [...state.cartList]
  const index = cartList.findIndex(item=>item.id === action.payload.id) // 若Id有重複，就不加入，第一次加入一定為 -1
  switch (action.type) {
    case 'ADD_TO_CART':{
      if(index === -1){
        cartList.push(action.payload)
      } else {
        cartList[index].quantity += action.payload.quantity
      }
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
      cartList.splice(index)
      return {
        ...state,
        cartList
      }
    default:
      return state;
  }
}
export const cartInit = {
  cartList: []
}
