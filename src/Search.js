import { Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from 'react';
import './input.css';



const Search = ({ searchQuery, setSearchQuery }) => (



    <Input
        className="search-input"
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Enter keyword to search product"
        name="s"
        startAdornment={
            <InputAdornment position="start">
                <SearchIcon style={{ fill: "lightgray", paddingLeft: 4 }} />
            </InputAdornment>
        }
        disableUnderline={true}
        style={{ fontSize: 13, color: "grey" }}

    />

    // <div className="search-input">
    //     <SearchIcon />
    //     <input
    //         value={searchQuery}
    //         onInput={e => setSearchQuery(e.target.value)}
    //         type="text"
    //         id="header-search"
    //         placeholder="Enter keyword to search product"
    //         name="s"
    //     />
    // </div>

);

export default Search
