import React from 'react'
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import { AiFillBug } from "react-icons/ai";
// import { AiFillHome } from "react-icons/ai";
// import { AiOutlineLink } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import { productsContext } from '../contexts/Products'
// import { useContext } from 'react';
import { useSelector } from "react-redux";



export default function MyNav() {
  const cartCount = useSelector((state) => state.cartCounter.value);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Handwork E-Commerce </a>
        {cartCount}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/students">
                Students
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/store">
                Store
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

