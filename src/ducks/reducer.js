//import axios from 'axios';

const initialState = {
    
}

// consts here
const UPDATE_PAGE = "UPDATE_PAGE" /*place holder*/

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_PAGE/*UPDATE_CONST is a place holder*/:
            return Object.assign({}, state, {

            });
        default: return state;
    }
}

export function updateProfile() {
    return {
        type: UPDATE_PAGE/*UPDATE_CONST is a placeholder*/,
        payload: {}
    }
}

export default reducer