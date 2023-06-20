export default function Navbar(){
  return <div>
          <nav className="navbar navbar-light bg-light justify-content-between p-4">
          <span className="navbar-brand">You DESERT good taste!</span>
          <button type="button" className="btn btn-outline-dark position-relative">Your cart
          <span className="badge badge-pill badge-danger position-absolute top-0 start-100 translate-middle">99</span>
          </button>
        </nav>
  </div>
}
