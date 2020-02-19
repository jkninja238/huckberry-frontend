import React, { useState } from 'react';
import SVG from 'react-inlinesvg';

//style
import './SearchBar.css';

//icon
import SearchIcon from '../assets/icon-search.svg';

const SearchBar = () => {
    const [ searchkey, setSearchKey ] = useState("");

    return (
        <div className="searchbar-wrapper">
            <div className="media-fixed">
                <div className="form-wrapper">
                    <form method="get" action="/search" autoComplete="off">
                        <input type="text" placeholder="Search" name="keywords" 
                          value={searchkey} onChange={e => setSearchKey(e.value)} />
                        <button type="submit">
                            <SVG src={SearchIcon} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
