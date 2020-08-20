import {
    SONGS_REQUEST,
    GET_SONGS_SUCCESS,
    GET_SONGS_FAILED
} from '../types';

const initialState = {
    loading: false,
    songs: [],
    error: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SONGS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_SONGS_SUCCESS:
            return {
                ...state,
                loading: false,
                songs: action.payload
            }
        case GET_SONGS_FAILED:
            return {
                ...state,
                loading: false,
                songs: [],
                error: action.payload
            }
        default:
            return state
    }
}