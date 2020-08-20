import {
    SINGERS_REQUEST,
    GET_SINGERS_SUCCESS,
    GET_SINGERS_FAILED
} from '../types';

const initialState = {
    loading: false,
    singers: [],
    error: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SINGERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_SINGERS_SUCCESS:
            return {
                ...state,
                loading: false,
                singers: action.payload
            }
        case GET_SINGERS_FAILED:
            return {
                ...state,
                loading: false,
                singers: [],
                error: action.payload
            }
        default:
            return state
    }
}