
// import axios from 'axios'

// import { useEffect, useState } from 'react';
import './assets/all.scss'

function App() {

  return (
    <div className="App">
        <nav className="navbar navbar-light bg-light justify-content-between p-4">
          <span className="navbar-brand">You DESERT good taste!</span>
          <button type="button" className="btn btn-outline-dark position-relative">Your cart
          <span className="badge badge-pill badge-danger position-absolute top-0 start-100 translate-middle">99</span>
          </button>
        </nav>
        <div className="container mt-4">
          <div className="row">
            <div className="col-8">
              <div className="row row-cols-3 g-3">

                <div className="col">
                  <div className="card">
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="Card image cap"/>
                      <div className="card-body">
                        <h6 className="card-title d-flex justify-content-between">Rainbow Donuts<span className="">$220</span></h6>
                        <button href="#" className="btn btn-outline-primary w-100">Add to my cart</button>
                      </div>
                    </div>
                </div>
                <div className="col">
                  <div className="card">
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="Card image cap"/>
                      <div className="card-body">
                        <h6 className="card-title d-flex justify-content-between">Rainbow Donuts<span className="">$220</span></h6>
                        <button href="#" className="btn btn-outline-primary w-100">Add to my cart</button>
                      </div>
                    </div>
                </div>
                <div className="col">
                  <div className="card">
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="Card image cap"/>
                      <div className="card-body">
                        <h6 className="card-title d-flex justify-content-between">Rainbow Donuts<span className="">$220</span></h6>
                        <button href="#" className="btn btn-outline-primary w-100">Add to my cart</button>
                      </div>
                    </div>
                </div>
                <div className="col">
                  <div className="card">
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="Card image cap"/>
                      <div className="card-body">
                        <h6 className="card-title d-flex justify-content-between">Rainbow Donuts<span className="">$220</span></h6>
                        <button href="#" className="btn btn-outline-primary w-100">Add to my cart</button>
                      </div>
                    </div>
                </div>
                <div className="col">
                  <div className="card">
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="Card image cap"/>
                      <div className="card-body">
                        <h6 className="card-title d-flex justify-content-between">Rainbow Donuts<span className="">$220</span></h6>
                        <button href="#" className="btn btn-outline-primary w-100">Add to my cart</button>
                      </div>
                    </div>
                </div>

              </div>
            </div>
            <div className="col-4 bg-light p-3">
              <table className="table align-middle">
                <tbody className="">
                  <tr>
                    <td><a></a></td>
                    <td><img></img></td>
                    <td>Rainbow Donuts<br/><small>NT$220</small></td>
                    <td><select className="form-select"></select></td>
                    <td>
                      NT$440
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-end">總金額 NT$440</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

        </div>
    </div>
  );
}

export default App;
