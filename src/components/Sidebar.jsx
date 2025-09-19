import React from "react";
import "./Sidebar.css";

const Sidebar = ({ items }) => {
  return (
    <div className="sidebar">
      {items.map((item, i) => (
        <button key={i} className="sidebar-btn">
          {item}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
