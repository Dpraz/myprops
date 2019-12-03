import React from 'react';
import { ReactComponent as Icon } from '../../assets/shopping.svg';
import './CardItem.scss';
import { connect } from 'react-redux'
import { CART_TOGGLE } from '../../redux/cart/cartAction';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';

const CardItem = ({ CART_TOGGLE, itemCount }) => (
    <div className='cart-icon' onClick={CART_TOGGLE}>
        <Icon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    CART_TOGGLE: () => dispatch(CART_TOGGLE())
});
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});
export default connect(mapStateToProps, mapDispatchToProps)(CardItem);  