import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import categoryReducer from './categoryReducer';
import albumsReducer from './albumsReducer';
import singersReducer from './singersReducer';
import songsReducer from './songsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    counterReducer,
    categories: categoryReducer,
    albums: albumsReducer,
    singers: singersReducer,
    songs: songsReducer,
    users: usersReducer
})