import React from "react";
import "./FilterButtons.css";

const FilterButtons = ({ filters ,coding_feature }) => {
  return (
    <div className="filter-container">
      {filters.map((filter, i) => (
        <button key={i} className="filter-btn" onClick={()=>coding_feature(i)}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
