import React from 'react';
import { Typography, styled } from '@mui/material';
import { Link } from "react-router-dom";

const StyledTypography = styled(Typography, {
    shouldForwardProp: prop => prop !== 'color'
})(({ color }) => ({
    fontFamily: `Lilita One, cursive`,
    fontSize: '30px',
    padding: '20px 0',
    '& a': {
        color: color ? color : '#fff',
        textDecoration: 'none'
    }
}));

export const Logo = props => {
    return (

        <StyledTypography
            {
            ...(props.color && { color: props.color })
            }
        >
            <Link to='/'>
                Image Gallery Viewer
            </Link>

        </StyledTypography>
    )
}