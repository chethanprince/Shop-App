import React from 'react'
import { useSelector } from 'react-redux'
import{NavLink} from 'react-router-dom'


const Navbar=()=> {
  const state = useSelector((state)=> state);

  console.log(state);
  console.log(state.handelCart.length);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
  <div className="container">
    <p className="navbar-brand fw-bold fs-4" to="#">
        Shopping Cart
    </p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
              Home
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">
              Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">
              Profile
          </NavLink>
        </li>    
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="buttons">
          <button className="btn btn-outline-dark">
         Cart {state.handelCart.length}
          </button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar