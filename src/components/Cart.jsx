import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { RemoveToCart } from "../store/cartSlice"
import { RemoveToCart, DecreaseToCart,AddToCart, AllClearCart } from "../store/cartSlice"

export default function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()


  const RemoveToCartt = (items) =>{
    dispatch(RemoveToCart(items))
  }

  const DecreseFromCart = (items) =>{
    dispatch(DecreaseToCart(items))
  }
 const IncrementToCart = (items) =>{
   dispatch(AddToCart(items))
 }
 const AllClearToCart = () =>{
   dispatch(AllClearCart())
 }

  return (
    <div className="cartt">
      <div className="">
        <h2>Shopping Cart</h2>
      </div>
      <div className="productWrapper">
        {
          cart.cartItems?.map((items) =>(
            <div className="card">
              <img src={items.image} alt="d" />
              <div className="cartdetails">
                <h3>{items.title}</h3>
                <i class="fa-solid fa-trash" onClick={() => RemoveToCartt(items)}></i>
              </div>
              <div className="price">
                <h3>Price: $ {items.price}</h3>
              </div>
              <div className="cartQuantity">
                <button onClick={() =>DecreseFromCart(items)}>-</button>
                <div>{items.cartQuantity}</div>
                <button onClick={() => IncrementToCart(items)}>+</button>
              </div>
              <div className="">
                <h3>$ {items.price * items.cartQuantity}</h3>
              </div>

            </div>
          ))
        }
      </div>
      <div className="cart-summary">
        <button onClick={() => AllClearToCart()}>All Clear </button>
        <div className="cart-checkout">
          <div className="subtotal">
            <h3>Subtotal</h3>
            <h3>$ {cart.cartTotalAmount}</h3>
          </div>
          <p> what tech you're using for your project, website</p>
          <button>Check Out</button>
          <div className="shoping">
            <Link to="/">
            <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
         
}
