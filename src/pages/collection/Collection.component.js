import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Item from "../../components/collection-preview/Item.component";
import './collection.styles.css'
import { selectCollectionItemsByName } from "../../store/slicers/collections";
import Loader from "../../components/loader/Loader.commponent";

export default function Collection() {
  const params = useParams();
  const collection = params.collection // ex collection = 'hats'
  const state = useSelector(state => state) 
  const collectionItems = selectCollectionItemsByName(state,collection)

  return (
    <div className="parent-container collection">
      <h2 className="title">{params.collection}</h2>
      <div className="items">

          { collectionItems ? collectionItems.map((item) => (
          <Item key={item.id} item={item} />
        )) :
        <Loader />
          }
      </div>
    </div>
  );
}
