import React, { useEffect } from "react";
import "./checkout.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, cartToggle } from "../../store/slicers/cart/cartSlice";
import TotalPrice from "../../components/total-price/TotalPrice.component";

export default function Checkout() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(()=>{dispatch(cartToggle(true))},[])
  return (
    <div className="parent-container checkout-page">
      <table className="table align-middle text-center">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => {
            return (
              <tr className="checkout-details">
                <th scope="row"><img src={cartItem.imageUrl} className="cart-item-img" alt="item-img"/></th>
                <td >{cartItem.name}</td>
                <td > <span className="pointer">&#10094;</span> {cartItem.quantity} <span className="pointer" onClick={()=>{dispatch(addItem(cartItem))}}>&#10095;</span></td>
                <td>${cartItem.price}</td>
                <td><span className="pointer">&#10005;</span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TotalPrice />
    </div>
  );
}
