import React from 'react';
import { connect } from 'react-redux'
import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import InsideCart from '../CartCart/InsideCart'
import './Cart.scss'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cartSelector'
import { createStructuredSelector } from 'reselect';
import { CART_TOGGLE } from '../../redux/cart/cartAction';
const Cart = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items ">
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <InsideCart key={InsideCart.id} item={cartItem} />

                    ))) : (
                        <span className="empty-message">Your Cart is Empty</span>
                    )
            }
        </div>
        <CustomButtonComponent onClick={() => {
            history.push('/checkout');
            dispatch(CART_TOGGLE());
        }} >Go to Checkout</CustomButtonComponent>
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart));