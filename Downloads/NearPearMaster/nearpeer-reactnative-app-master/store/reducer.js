import * as actions from './actionTypes';
let lastId = 0;

const initialState = {
    isAuthenticated: false
}

export default function reducer (state=initialState , action) {

    switch (action.type) {
        case 'UPDATE_AUTH_STATUS':
            // console.log('action --->', action)
            return {...state, isAuthenticated: action.payload}
        default:
            return state
            // break;
    }

    // return state;
}