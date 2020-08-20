import { INCREMENT_VALUE, DECREMENT_VALUE } from '../types';


const initialState = {
    count: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT_VALUE:
            return {
                ...state,
                count: state.count - action.payload
            }

        default:
            return state
    }
}