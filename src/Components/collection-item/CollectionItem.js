import React from 'react'
import './CollectionItem.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartAction'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
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
                <span className="price">&#8377;{price} </span>
            </div>
            <CustomButtonComponent onClick={() => addItem(item)} inverted>Add to Cart</CustomButtonComponent>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);