import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


import { AddToCart } from "../store/cartSlice"

export default function FetchApi() {

  const [products, setproducts] = useState([]);

  const dispatch = useDispatch();
  
  useEffect(() =>{
    const fetchProducts = async() =>{
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      console.log(data)
      setproducts(data)
    }
    fetchProducts()
  },[])

  const handlerAddToCart = (product) =>{
    dispatch(AddToCart(product))
  }

  return (
    <div className="products">
      {
        products.map((product) =>(
          <div className="cart">
            <img src={product.image}  alt="dsf" />
            <h5>{product.title}</h5>
            <h4>Price: {product.price}</h4>
            <button onClick={() => handlerAddToCart(product)} className="button">Add To Cart</button>
          </div>
        ))
      }
    </div>
  );
}
