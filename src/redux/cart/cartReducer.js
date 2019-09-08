import CartActionTypes from './cart.types'
const INITIAL_STATE = {
    hidden: true
};
const cartReducer = (state = INITIAL_STATE, action) => {
    let { type } = action;
    switch (type) {
        case CartActionTypes.CART_TOGGLE:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}
export default cartReducer;