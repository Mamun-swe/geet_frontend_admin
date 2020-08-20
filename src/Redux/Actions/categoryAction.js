import {
    CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILED
} from '../types';

import axios from 'axios';
import api from '../api';

export const categoryList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_REQUEST })
            const response = await axios.get(`${api}users`)
            dispatch({
                type: GET_CATEGORY_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: GET_CATEGORY_FAILED,
                payload: error.message
            })
        }
    }
}
