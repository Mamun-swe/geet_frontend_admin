import {
    SONGS_REQUEST,
    GET_SONGS_SUCCESS,
    GET_SONGS_FAILED
} from '../types';
import axios from 'axios';
import api from '../api';


export const songsList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: SONGS_REQUEST })
            const response = await axios.get(`${api}users`)
            dispatch({
                type: GET_SONGS_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: GET_SONGS_FAILED,
                payload: error.message
            })
        }
    }
}