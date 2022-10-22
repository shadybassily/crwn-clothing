import React from "react";
import Item from "./Item.component";
import './collection-preview.styles.css'
export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="items-container">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
          <div className="view-more">
        View More
      </div>
      </div>
     
    </div>
  );
}
