import React from 'react';
import {
    Box,
    ImageList,
    ImageListItem,
    Typography
} from '@mui/material';
import { useParams } from 'react-router-dom';

export const ImageViewer = props => {

    const photos = props.data;
    const { keyword } = useParams();

    return (
        <Box>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }} my={1} >{keyword ? `'${keyword}'` : 'Featured'} Photos</Typography>
            <Box>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {photos.map(photo => (
                        <ImageListItem key={photo.id}>
                            <img
                                src={`${photo.src.original}?fit=crop&auto=compress`}
                                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={photo.photographer}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    )
}