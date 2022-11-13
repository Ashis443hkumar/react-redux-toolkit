import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./style.css"
export default function Header() {

  const getdata = useSelector((state) => state.cart)
  console.log(getdata)

  return (
    <div className="header">
      <NavLink to="/"> <h1> React-Redux-Toolkit</h1></NavLink>
      <ul className="navbar-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
      </ul>
      <div className="cart-bag">
        <NavLink to="/cart">
            <i class="fa-solid fa-bag-shopping"></i>
            <span>{getdata.cartItems.length}</span>
         </NavLink>
      </div>
    </div>
  );
}
