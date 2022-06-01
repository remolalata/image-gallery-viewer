import React from 'react';
import {
    Box,
    styled,
    Typography
} from '@mui/material';
import { SearchBar, Logo, Container } from '../index';

import BgImage from '../../assets/images/pexels-photo-11899413.jpeg';

const StyledWrapper = styled(Box)({
    maxHeight: '500px',
    height: '500px',
    minHeight: '380px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative'
});

const StyledBackgroundHero = styled(Box)({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
});

const StyledTypography = styled(Typography)({
    position: 'relative',
    zIndex: 2,
    maxWidth: '650px',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '60px',
    margin: '20px 0'
})

const StyledLogo = styled(Box)({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: '2',
    '& .MuiBox-root': {
        width: '80%',
        margin: '0 auto'
    }
})

export const Header = () => {
    return (
        <Box>
            <StyledLogo>
                <Box>
                    <Logo />
                </Box>
            </StyledLogo>

            <StyledWrapper>
                <StyledBackgroundHero />
                <StyledTypography variant='h1'>A place for pictures and photographs</StyledTypography>
                <SearchBar displaySuggestion />
            </StyledWrapper>
        </Box>
    )
}