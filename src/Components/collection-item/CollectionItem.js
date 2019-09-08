import React from 'react'
import './CollectionItem.scss'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'

export default ({ id, name, price, imageUrl }) => {
    return (
        <div className="collection-item">
            <div className="image"
                style={
                    {
                        backgroundImage: `url(${imageUrl})`
                    }
                } />
            <div className="collection-footer" >
                <span className="name">  {name} </span>
                <span className="price">{price} </span>
            </div>
            <CustomButtonComponent inverted>Add to Cart</CustomButtonComponent>
        </div>
    )
}
