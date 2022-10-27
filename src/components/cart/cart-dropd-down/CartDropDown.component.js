import React from "react";
import "./cart-drop-down.styles.css";
import Custombutton from "../../custom-button/CustomButton.component";
import EmptyCart from "../empty-cart/EmptyCart.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartDropDown() {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate()
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length !== 0 ? cartItems.map((item) => {
          return (
           <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt="item-img" className="cart-item-img"/>
            <div className="cart-item-details">
              <p>{item.name}</p>
              <p>{item.quantity} X ${item.price} </p>
            </div>
           </div>
          );
        }) : <EmptyCart />}
      </div>

      {cartItems.length !== 0 && <Custombutton className="checkout" onClick={()=>{navigate('/checkout')}}>GO TO CHECKOUT</Custombutton>}
    </div>
  );
}
