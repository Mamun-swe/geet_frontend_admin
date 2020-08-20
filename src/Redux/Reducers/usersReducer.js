import { USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from '../types';

const initialState = {
    loading: false,
    users: [],
    error: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case GET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            return state
    }
}