import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Box,
    TextField,
    Typography,
    styled
} from '@mui/material';
import { createClient } from 'pexels';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { setSearchPhotos } from '../../slices/photo';

import { TOP_KEYWORDS } from '../../utils/constants';

const client = createClient(process.env.REACT_APP_PEXEL_CLIENT_ID);

const StyledSearchBox = styled(Box, {
    shouldForwardProp: prop => prop !== 'outlined'
})(({ outlined }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '650px',
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 2,
    borderRadius: '8px',
    alignItems: 'center',
    ...(outlined && {
        border: 'solid 1px lightgray'
    }),
    '& .MuiFormControl-root': {
        flexGrow: '1'
    },
    '& .MuiOutlinedInput-input': {
        fontSize: '17px',
        padding: '0 20px',
        height: '60px'
    },
    '& fieldset': {
        border: 'none'
    }
}));

const StyledIcon = styled(Box)({
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
});

const StyledTypography = styled(Typography)({
    position: 'relative',
    zIndex: 2,
    textAlign: 'left',
    width: '100%',
    maxWidth: '650px',
    margin: '10px 0',
    color: '#fff'
});

export const SearchBar = props => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const suggested = TOP_KEYWORDS.join(', ');
    const [keyword, setKeyword] = useState('');

    const handleOnChange = e => {
        setKeyword(e.target.value);

        if (e.keyCode === 13 || e.key === 'Enter') {
            handleSearch();
        }
    }

    const handleSearch = () => {
        const query = 'Nature';

        client.photos.search({ query }).then(res => {
            dispatch(setSearchPhotos({ photos: res.photos }));
            navigate(`/search/${keyword}`);
        });
    }

    return (
        <>
            <StyledSearchBox
                {
                ...(props.outlined && { outlined: true })
                }
            >
                <TextField
                    placeholder='Search for free photos'
                    onKeyUp={handleOnChange}
                />
                <StyledIcon onClick={handleSearch}>
                    <SearchIcon />
                </StyledIcon>
            </StyledSearchBox>
            {props.displaySuggestion &&
                <StyledTypography>
                    Suggested: {suggested}
                </StyledTypography>
            }
        </>
    )
}