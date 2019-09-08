import React from 'react';
import { ReactComponent as Icon } from '../../assets/shopping.svg';
import './CardItem.scss';
import { connect } from 'react-redux'
import { CART_TOGGLE } from '../../redux/cart/cartAction';


const CardItem = ({ CART_TOGGLE }) => (
    <div className='cart-icon' onClick={CART_TOGGLE}>
        <Icon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
);
const mapDispatchToProps = dispatch => ({
    CART_TOGGLE: () => dispatch(CART_TOGGLE())
});
export default connect(null, mapDispatchToProps)(CardItem);