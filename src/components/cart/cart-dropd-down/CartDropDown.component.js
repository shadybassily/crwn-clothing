import React from "react";
import "./cart-drop-down.styles.css";
import Custombutton from "../../custom-button/CustomButton.component";
import { useSelector } from "react-redux";
import Item from "../../collection-preview/Item.component";
export default function CartDropDown() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => {
          return (
           <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt="item-img" className="cart-item-img"/>
            <div className="cart-item-details">
              <p>{item.name}</p>
              <p>${item.price} X {item.quantity}</p>
            </div>
           </div>
          );
        })}
      </div>
      <Custombutton className="checkout">GO TO CHECKOUT</Custombutton>
    </div>
  );
}
