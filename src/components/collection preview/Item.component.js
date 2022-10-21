import React from "react";
import './item.styles.css'
export default function Item({item}) {
  let {imageUrl, name, price} = item
  return (
    <div className="item">
      <div className="photo" style={{backgroundImage:`url(${imageUrl})`}}></div>
      <div className="details">
        <p className="name">{name}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
}
