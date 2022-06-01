import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createClient } from 'pexels';
import { Header, Container, ImageViewer } from '../../components';
import { setPhotos } from '../../slices/photo';

const client = createClient(process.env.REACT_APP_PEXEL_CLIENT_ID);

export const Home = () => {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!photos.photos.length) {
            client.photos.curated({ per_page: 20 }).then(res => {
                dispatch(setPhotos({ photos: res.photos }));
            });
        }
    }, []);

    return (
        <>
            <Header />
            <Container>
                {photos.photos.length ? <ImageViewer data={photos.photos} /> : null}
            </Container>
        </>

    )
}