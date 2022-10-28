import React from 'react'
import './collection-overview.styles.css'
import CollectionPreview from '../collection-preview/CollectionPreview.component';
import { useSelector } from 'react-redux';

export default function CollectionsOverview() {
    const collections = useSelector(state => state.collections);
  return (
    <>
        {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          {...collection}
        />
      ))}
    </>
  )
}
