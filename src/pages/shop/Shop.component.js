import React from "react";
import { useSelector } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import { withConditional } from "../../components/with-conditional/WithConditional.component";
import { selectAllCollections } from "../../store/slicers/collections";


export default function Shop() {
  const ConditionalCollectionsOverview = withConditional(CollectionsOverview)
  const collections = useSelector(selectAllCollections) ;
  return (
    <div className="parent-container mt-2">
    <h1>Collections</h1>
      <ConditionalCollectionsOverview collections={collections} isLoading={!collections}/>
    </div>
  );
}
