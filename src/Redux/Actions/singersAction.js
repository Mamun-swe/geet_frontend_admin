import {
    SINGERS_REQUEST,
    GET_SINGERS_SUCCESS,
    GET_SINGERS_FAILED
} from '../types';
import axios from 'axios';
import api from '../api';


export const singerList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: SINGERS_REQUEST })
            const response = await axios.get(`${api}users`)
            dispatch({
                type: GET_SINGERS_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: GET_SINGERS_FAILED,
                payload: error.message
            })
        }
    }
}