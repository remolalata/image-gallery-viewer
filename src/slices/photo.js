import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    photos: [],
    searchPhotos: []
}

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setPhotos: (state, action) => {
            state.photos = action.payload.photos;
        },
        setSearchPhotos: (state, action) => {
            state.searchPhotos = action.payload.photos;
        }
    }
});

export const { setPhotos, setSearchPhotos } = photosSlice.actions;
export default photosSlice.reducer;