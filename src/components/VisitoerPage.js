import Products from '../components/Product';
import Carts from '../components/Cart';
export default function VisitorPage(){
  return (
    <div className="row">
    <div className="col-8">
      <Products></Products>
    </div>
    <div className="col-4 bg-light p-3">
      <Carts></Carts>
    </div>
  </div>
  )
}