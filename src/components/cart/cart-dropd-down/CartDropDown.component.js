import React from "react";
import "./cart-drop-down.styles.css";
import Custombutton from "../../custom-button/CustomButton.component";
import EmptyCart from "../empty-cart/EmptyCart.component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartToggle } from "../../../store/slicers/cart/cartSlice";

export default function CartDropDown() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
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

      {cartItems.length !== 0 && <Custombutton className="checkout" onClick={()=>{dispatch(cartToggle(true));navigate('/checkout')}}>GO TO CHECKOUT</Custombutton>}
    </div>
  );
}
