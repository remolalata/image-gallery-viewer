import React from 'react';
import { Box, styled } from '@mui/material';

const StyledContainer = styled(Box)({
    maxWidth: '80%',
    margin: '20px auto'
})

export const Container = props => {
    return <StyledContainer>{props.children}</StyledContainer>
}