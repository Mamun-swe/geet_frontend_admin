import {
    CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILED
} from '../types';

const initialState = {
    loading: false,
    categories: [],
    error: "",
    singleCat: ""
}


export default function (state = initialState, action) {
    switch (action.type) {
        case CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case GET_CATEGORY_FAILED:
            return {
                ...state,
                loading: false,
                categories: [],
                error: action.payload
            }
        default:
            return state
    }
}