import React from "react";
import "../containers/Card.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="search-box">
      <input
        className="search"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
