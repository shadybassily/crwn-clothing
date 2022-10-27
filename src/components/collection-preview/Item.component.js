import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slicers/cart/cartSlice";
import CustomButton from "../custom-button/CustomButton.component";
import './item.styles.css'
export default function Item({item}) {
  const dispatch = useDispatch()
  let {imageUrl, name, price} = item
  return (
    <div className="item">
      <div className="photo" style={{backgroundImage:`url(${imageUrl})`}}>
        <CustomButton className="add-to-cart" onClick={()=>{dispatch(addItem(item))}}>ADD TO CART</CustomButton>
      </div>
      <div className="details">
        <p className="name">{name}</p>
        <p className="price">${price}</p>
      </div>
      
    </div>
  );
}
