import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { ApiFunction } from '../helpers';
import { Context } from '../context/Context';
import Button from '../ui/Button';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: theme.spacing(4),
        transition: theme.transitions.create('width'),
        width: '100px',
    },
}));

export default function BookSearch() {
    const { setSearchResult, setLoading, searchResult } = React.useContext(Context)
    const [searchValue, setSearchValue] = React.useState('');
    const handleSearch = async () => {
        setLoading(true)
        const result = await ApiFunction('GET', `/books/${searchValue}`)
        setSearchResult(result)
        setLoading(false)
    };
    const handleClear = async () => {
        setSearchResult(null)
        setSearchValue('')
    };
    return (
        <Search sx={{ display: "flex" }}>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            {
                searchResult ? <Button text={<ClearIcon />} click={handleClear} /> : <Button text={<SearchIcon />} click={handleSearch} />
            }
        </Search>
    );
}