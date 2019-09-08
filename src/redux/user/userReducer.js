import { UserActionTypes } from './user.type'
const INITIAL_STATE = {
    currentUser: null
};

export default (state = INITIAL_STATE, action) => {
    let { type, payload } = action;
    switch (type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
}