import React from 'react';
import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo, Container, SearchBar } from '../../../components';

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
});

export const SubHeader = () => {
    return (
        <Container>
            <StyledBox>
                <Logo color='#121212' />
                <SearchBar outlined  />
            </StyledBox>
        </Container>
    )
}