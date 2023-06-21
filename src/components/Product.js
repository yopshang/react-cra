import productDatas from "../assets/productDatas"
import { useContext } from "react"
import {CartContext} from '../store'

export default function Products(){
  const [state, dispatch] = useContext(CartContext) // 要使用的地方才用useContext
  return (
  <div className="row row-cols-3 g-3">
    {
      productDatas.map(productData=>{
        return (
          <div key={productData.id} className="col">
            <div className="card">
                <img className="card-img-top cardImg" src={productData.img} alt="Card image cap"/>
                <div className="card-body">
                  <h6 className="card-title d-flex justify-content-between">{productData.title}<span className="">{productData.price}</span></h6>
                  <button onClick={()=>{
                      dispatch({
                        type: 'ADD_TO_CART',
                        payload: {
                          ...productData,
                          qty: 1
                        }
                      })
                    }
                  } href="#" className="btn btn-outline-primary w-100">Add to my cart</button>
                </div>
              </div>
          </div>
        )
      })
    }

</div>)
}