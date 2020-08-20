import {
    USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILED
} from '../types';
import axios from 'axios';
import api from '../api';

export const usersList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: USERS_REQUEST })
            const response = await axios.get(`${api}users`)
            dispatch({
                type: GET_USERS_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: GET_USERS_FAILED,
                payload: error.message
            })
        }
    }
}