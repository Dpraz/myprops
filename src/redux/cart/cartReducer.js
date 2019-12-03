import CartActionTypes from './cart.types'
import { addItermToCart, removeItemFromCart } from './CartUtils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};
const cartReducer = (state = INITIAL_STATE, action) => {
    let { type } = action;
    switch (type) {
        case CartActionTypes.CART_TOGGLE:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItermToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        default:
            return state;
    }
}
export default cartReducer;