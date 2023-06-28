import { useContext } from "react"
import { CartContext } from "../store"
import  { Link } from 'react-router-dom'

export default function Navbar(){
  const [state, dispatch] = useContext(CartContext)

  const handleRoleChange = (role)=>{
    dispatch({
      type: 'CHANGE_ROLE',
      payload: role
    })
  }
  
  return (<div>
          <nav className="navbar navbar-light bg-light justify-content-between p-4">
          <span className="navbar-brand">You DESERT good taste!</span>
          <div>
            {/* <button type="button" className={state.role==='visitor'?'btn btn-outline-dark position-relative mr-2 active':'btn btn-outline-dark position-relative mr-2'}
            onClick={()=>handleRoleChange('visitor')}
            >visitor</button>
            <button type="button" className={state.role==='manager'?'btn btn-outline-dark position-relative mr-2 active':'btn btn-outline-dark position-relative mr-2'}
             onClick={()=>handleRoleChange('manager')}
            >manger</button> */}
            <Link className="nav-link" to="/">visitor</Link>
            <Link className="nav-link" to="/mgr">manger</Link>
            <button type="button" className="btn btn-outline-dark position-relative">Your cart
            {
              state.cartList.length>0?<span className="badge badge-pill badge-danger position-absolute top-0 start-100 translate-middle">{state.cartList.length}</span>:''
            }
            </button>

          </div>
        </nav>
  </div>)
}
