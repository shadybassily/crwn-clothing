import React from "react";
import Item from "./Item.component";
import "./collection-preview.styles.css";
import { useNavigate } from "react-router-dom";
export default function CollectionPreview(collection) {
  const{ title, items, routeName} =  collection
  const navigate = useNavigate()
  return (
    <div className="collection-preview">
      <h2 className="title pointer" onClick={() => navigate(`${routeName}`)}>{title}</h2>
      <div className="items-container">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
