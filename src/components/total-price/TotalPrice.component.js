import React from "react";
import { useSelector } from "react-redux";
import "./totalprice.styles.css";
export default function TotalPrice() {
  const totalPrice = useSelector((state) =>
    state.cart.cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    )
  );
  return <div className="total-price">TOTAL : ${totalPrice}</div>;
}
