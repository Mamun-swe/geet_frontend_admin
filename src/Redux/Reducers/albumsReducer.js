import {
    ALBUMS_REQUEST,
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_FAILED
} from '../types';

const initialState = {
    loading: false,
    albums: [],
    error: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ALBUMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALBUMS_SUCCESS:
            return {
                ...state,
                loading: false,
                albums: action.payload
            }
        case GET_ALBUMS_FAILED:
            return {
                ...state,
                loading: false,
                albums: [],
                error: action.payload
            }
        default:
            return state
    }
}