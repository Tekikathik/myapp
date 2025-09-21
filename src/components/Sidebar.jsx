import React from "react";
import "./Sidebar.css";

const Sidebar = ({ items,updateRecords }) => {
  return (
    <div className="sidebar">
      {items.map((item, i) => (
        <button key={i} className="sidebar-btn"  onClick={()=>updateRecords(i)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
