import React from "react";
import { Link } from "react-router-dom";
import emptyBag from '../../../assets/images/empty-bag.png'
import './empty-cart.styles.css'
export default function EmptyCart() {
  return (
    <div>
      <img src={emptyBag} className="empty-bag"/>
      <p className="empty-cart-message">You Have No Items In Your Cart</p>
      <p className="empty-cart-message">go <Link to='/shop'>SHOPPING</Link></p>
    </div>
  );
}
