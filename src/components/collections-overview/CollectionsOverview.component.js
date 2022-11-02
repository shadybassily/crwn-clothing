import React from 'react'
import './collection-overview.styles.css'
import CollectionPreview from '../collection-preview/CollectionPreview.component';
import { useSelector } from 'react-redux';
import { selectAllCollections } from '../../store/slicers/collections';
export default function CollectionsOverview() {
  const collections = useSelector(selectAllCollections);
  return (
    <>
        {Object.keys(collections).map((collection) => (
        <CollectionPreview
          key={collections[collection].id}
          {...collections[collection]}
        />
      ))}
    </>
  )
}
