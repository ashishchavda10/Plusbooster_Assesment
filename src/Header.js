import React from 'react'
import './Header.css';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <div className='header__searchInput'>
                <SearchIcon />
                <Search />
            </div>
        </div>
    )
}

export default Header
