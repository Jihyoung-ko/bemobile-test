import React from "react";

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';



const SearchBar = () => {
  return (
    <div>
      <h1>Search</h1>
      <div>
        <SearchIcon />
        <InputBase placeholder="Search..." />
      </div>
      
    </div>
  )
}

export default SearchBar;