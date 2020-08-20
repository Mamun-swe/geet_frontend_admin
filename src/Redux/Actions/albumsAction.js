import {
    ALBUMS_REQUEST,
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_FAILED
} from '../types';
import axios from 'axios';
import api from '../api';

export const albumList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ALBUMS_REQUEST })
            const response = await axios.get(`${api}users`)
            dispatch({
                type: GET_ALBUMS_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: GET_ALBUMS_FAILED,
                payload: error.message
            })
        }
    }
}