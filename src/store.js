import { createContext } from 'react';
export const CartContext = createContext({})
export const CartReducer = (state, action)=>{
  const cartList = [...state.cartList]
  const index = cartList.findIndex(item=>item.id === action.payload.id) // 若Id有重複，就不加入，第一次加入一定為 -1
  const addAmtListIndex = state.addAmtList.findIndex(item=>item.id === action.payload.id)
  const addAmtList = [...state.addAmtList]
  switch (action.type) {
    case 'ADD_TO_CART':{
      if(index === -1){
        let result = {...action.payload}
        result.quantity = addAmtListIndex===-1?1:parseInt(addAmtList[addAmtListIndex].amt)
        cartList.push(result)
      } else {
        // cartList[index].quantity += action.payload.quantity
        cartList[index].quantity += addAmtListIndex===-1?1:parseInt(addAmtList[addAmtListIndex].amt)
      }
      return {
        ...state,
        cartList,
        addAmtList
      }
    }
    case 'CHAGE_ADD_AMT':
      if(addAmtListIndex === -1) { // 沒找到 直接新增
        addAmtList.push({
          id: action.payload.id,
          amt: action.payload.amt
        })
      } else { // 有找到 修改舊的
        addAmtList[addAmtListIndex].amt = action.payload.amt
      }
      return {
        ...state,
        cartList,
        addAmtList
      }
    case 'CHANGE_CART_QUANTITY':
      cartList[index].quantity = action.payload.quantity
      return {
        ...state,
        cartList,
        addAmtList
      }
    case 'DELETE':
      cartList.splice(index)
      return {
        ...state,
        cartList,
        addAmtList
      }
    default:
      return state;
  }
}
export const cartInit = {
  cartList: [],
  addAmtList: []
}
