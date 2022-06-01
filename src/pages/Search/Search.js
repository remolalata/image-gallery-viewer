import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SubHeader, Container, ImageViewer } from '../../components';
import { useParams } from 'react-router-dom';
import { createClient } from 'pexels';
import { setSearchPhotos } from '../../slices/photo';

const client = createClient(process.env.REACT_APP_PEXEL_CLIENT_ID);

export const Search = () => {

    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    const { keyword } = useParams();

    useEffect(() => {
        if (!photos.searchPhotos.length) {
            client.photos.search({ query: keyword }).then(res => {
                dispatch(setSearchPhotos({ photos: res.photos }));
            });
        }
    }, []);

    return (
        <>
            <SubHeader />
            <Container>
                {photos.searchPhotos.length ? <ImageViewer data={photos.searchPhotos} /> : null}
            </Container>
        </>
    )
}