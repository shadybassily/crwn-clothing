import React from "react";
import "./cart-drop-down.styles.css";
import Custombutton from "../../custom-button/CustomButton.component";
export default function CartDropDown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"> 
      </div>
      <Custombutton className="checkout">GO TO CHECKOUT</Custombutton>
    </div>
  );
}
