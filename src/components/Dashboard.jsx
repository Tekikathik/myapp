import React from "react";
import Sidebar from "./Sidebar";
import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import ChartSection from "./ChartSection";
import Ranking from "./Ranking";
import "./Dashboard.css";

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
    { name: "A", value: 30 },
    { name: "B", value: 60 },
    { name: "C", value: 80 },
    { name: "D", value: 100 },
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
      <Ranking users={rankingUsers} />
    </div>
  );
};

export default Dashboard;
