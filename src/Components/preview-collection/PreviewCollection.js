import React from 'react'
import './PreviewCollection.scss'
import CollectionItem from '../collection-item/CollectionItem'

export default ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">{items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...ItemsProps }) => (
                    < CollectionItem key={id} {...ItemsProps} />
                ))}

            </div>
        </div>
    )
}
