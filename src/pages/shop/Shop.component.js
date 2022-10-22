import React from "react";
import CollectionPreview from "../../components/collection preview/CollectionPreview.component";
import SHOP_DATA from "./shop.data";
export default function Shop() {
  const collections = SHOP_DATA;
  return (
    <div className="parent-container mt-2">
      <h1>Collections</h1>
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
}
