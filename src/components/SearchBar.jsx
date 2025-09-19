import React from "react";
import { Search } from "lucide-react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-box">
        <Search className="icon" />
        <span>Search</span>
      </div>
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
  