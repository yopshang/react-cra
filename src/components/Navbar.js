import { useContext } from "react"
import { CartContext } from "../store"

export default function Navbar(){
  const [state, dispatch] = useContext(CartContext)
  
  return (<div>
          <nav className="navbar navbar-light bg-light justify-content-between p-4">
          <span className="navbar-brand">You DESERT good taste!</span>
          <button type="button" className="btn btn-outline-dark position-relative">Your cart
          {
            state.cartList.length>0?<span className="badge badge-pill badge-danger position-absolute top-0 start-100 translate-middle">{state.cartList.length}</span>:''
          }
          </button>
        </nav>
  </div>)
}
