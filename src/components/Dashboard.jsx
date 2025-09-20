import React from "react";
import Sidebar from "./Sidebar";
import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import ChartSection from "./ChartSection";
import Ranking from "./Ranking";
import "./Dashboard.css";
import Filter from "./Filter";

const Dashboard = () => {
  const sidebarItems = [
    "Overall",
    "FSD ReactNative",
    "FSD Flutter",
    "Data Analyst",
    "Aws Cloud",
    "ServiceNow",
  ];

  const filterItems = [
    "Coding Problem",
    "Contest Rating",
    "Highest Contest Rating",
  ];

  const chartData = [
    { name: "100-200", value: 35 },
    { name: "300-400", value: 50 },
    { name: "400-500", value: 80 },
    { name: "500-600", value: 10 },
    { name: "500-600", value: 506 },
    { name: "500-600", value: 100 },
    { name: "500-600", value: 10 },

  ];

  const rankingUsers = ["23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX"];

  return (
    <div className="dashboard">
      <Sidebar items={sidebarItems} />
      <div className="main-content">
        <FilterButtons filters={filterItems} />
        <SearchBar />
        <div className="chart-ranking">
          <ChartSection data={chartData} />
        </div>
      </div>
      <div className="filtercss">
        <Filter/>
      </div>
    </div>
  );
};

export default Dashboard;
