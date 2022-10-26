import React from "react";
import "./cart-icon.styles.css";
import shoppingIcon from "../../../assets/images/shopping-bag.svg";
export default function Car() {
  return (
    <div className="cart-icon">
      <img src={shoppingIcon} alt ="shoppingIcon" className="shopping-icon"/>
      <span className="item-count">0</span>
    </div>
  );
}
