import React from "react";
import "./style.css";
import "react-toastify/dist/ReactToastify.css"

import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
         <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/cart" element={<Cart/>} />
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}
