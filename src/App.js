
// import axios from 'axios'

// import { useEffect, useState } from 'react';
import './assets/all.scss'
import Navbar from './components/Navbar';
import Products from './components/Product';
import Carts from './components/Cart';

function App() {

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
