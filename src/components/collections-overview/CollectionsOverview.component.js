import React from 'react'
import './collection-overview.styles.css'
import CollectionPreview from '../collection-preview/CollectionPreview.component';
export default function CollectionsOverview(props) {
  const collections = props.collections;
  return (
    <>
        {Object.keys(collections).map((collection) => (
        <CollectionPreview
          key={collections[collection].id}
          {...collections[collection]}
        />
      )) }
    </>
  )
}
