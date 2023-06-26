import { CartContext } from "../store"
import { useContext } from "react"

export default function Carts(){
  const [state, dispatch] = useContext(CartContext)
  return (
    <table className="table align-middle">
    <tbody className="">
      {
        state.cartList.map((item)=>{
          return (
          <tr key={item.id}>
            <td><a></a></td>
            <td>
              <img className="cart-image" src={item.img}></img>
            </td>
            <td>{item.title}<br/><small>NT${item.price}</small></td>
              <td>
                <select className="form-select" value={item.quantity} onChange={(e)=>{
                  e.preventDefault();
                  const quantity = parseInt(e.target.value);
                  dispatch({
                    type: 'CHANGE_CART_QUANTITY',
                    payload: {
                      ...item,
                      quantity
                    }
                  })
                }}>
                  {
                    [...Array(20)].map((_, i)=>{
                      return (
                        <option key={i+1} value={i+1}>{i+1}</option>
                      )
                    })
                  }
                </select>
              </td>
            <td>
              NT$ {item.price*item.quantity}
            </td>
          </tr>
          )

        })
      }
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={5} className="text-end">總金額 NT$440</td>
      </tr>
    </tfoot>
  </table>
  )
}