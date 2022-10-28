import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Item from "../../components/collection-preview/Item.component";
import './collection.styles.css'
export default function Collection() {
  const params = useParams();

  const map_id_collection = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
  };
  const collection = useSelector((state) =>
    state.collections.filter(
      (collection) => collection.id === map_id_collection[params.collection]
    )
  );
  const collectionItems = collection[0].items;
  console.log(collection);

  return (
    <div className="parent-container collection">
      <h2 className="title">{params.collection}</h2>
      <div className="items">
        {collectionItems.map((item) => (
          <Item key={item} item={item} />
        ))}

      </div>
    </div>
  );
}
