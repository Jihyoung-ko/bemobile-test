import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
  const searchHandler = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <div className="searchContainer">
      <div className="searchInput">
        <input type="text" placeholder="Search..." onChange={searchHandler} />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
