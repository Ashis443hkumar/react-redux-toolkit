import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems"))
  : [] ,
  carttotalQuantity:0,
  carttotalAmount:0,
}

const cartSlice = createSlice({
   name:"cart",
   initialState,
   reducers:{
     AddToCart(state,action){
       const itemindex = state.cartItems.findIndex((items) => items.id === action.payload.id);
       if(itemindex >= 0){
         state.cartItems[itemindex].cartQuantity +=1;
         toast.info(`Increased ${state.cartItems[itemindex].title} cart Quantity`, {
          position: "bottom-left"
        })
       } else{
        const tempProduct = {...action.payload, cartQuantity:1}
        state.cartItems.push(tempProduct)
        toast.success(`${action.payload.title} Added To Cart`, {
          position: "bottom-left"
        });
       }
       localStorage.setItem("cartitems", JSON.stringify(state.cartItems))
       
     },

     RemoveToCart(state, action){
       const nextitems = state.cartItems.filter((item) => item.id !== action.payload.id);
       state.cartItems = nextitems;
       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
       toast.error(`${action.payload.title} Remove To Cart`, {
        position: "bottom-left"
      });
     },

     DecreaseToCart(state, action){
       const indexitems = state.cartItems.findIndex((cartitem) => cartitem.id === action.payload.id)
        if(state.cartItems[indexitems].cartQuantity > 1){
          state.cartItems[indexitems].cartQuantity -= 1;
          toast.success(` Decrease ${action.payload.title} Cart Quantity`, {
            position: "bottom-left"
          });
        }else if(state.cartItems[indexitems].cartQuantity === 1){
          const nextitems = state.cartItems.filter((item) => item.id !== action.payload.id);
          state.cartItems = nextitems;
          toast.error(`${action.payload.title} Remove To Cart`, {
           position: "bottom-left"
         });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
     },
     AllClearCart(state, action){
       state.cartItems = [];
       toast.error("All Cart clear ", {
        position: "bottom-left"
      });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
     },
     
   },
});

export const {AddToCart, RemoveToCart, DecreaseToCart ,AllClearCart} = cartSlice.actions;

export default cartSlice.reducer