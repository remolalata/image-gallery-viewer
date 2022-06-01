import { configureStore, combineReducers } from '@reduxjs/toolkit'
import photosSlice from './slices/photo';

const reducer = combineReducers({
    photos: photosSlice
})

const store = configureStore({
    reducer: reducer
});

export default store;