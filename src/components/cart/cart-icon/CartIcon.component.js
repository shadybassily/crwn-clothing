import React from "react";
import "./cart-icon.styles.css";
import shoppingIcon from "../../../assets/images/shopping-bag.svg";
import { useSelector } from "react-redux";
import { getMemoizedCartItems } from "../../../store/slicers/cart/cartSlice";
export default function Cart() {

  const cartItemsCount = useSelector(getMemoizedCartItems);

  return (
      <div className="cart-icon-container">
        <img src={shoppingIcon} alt="shopping" className="cart-icon"/>
        <span className="cart-icons-count">{cartItemsCount}</span>
      </div>
  );
}


{/* <div className="cart-icon">
     <div className="cart-icon-inside">
        <p className="item-count">{cartItemsCount}</p>
     </div>
    </div> */}