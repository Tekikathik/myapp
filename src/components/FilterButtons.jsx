import React from "react";
import "./FilterButtons.css";

const FilterButtons = ({ filters}) => {
  return (
    <div className="filter-container">
      {filters.map((filter, i) => (
        <button key={i} className="filter-btn">
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
