import React from "react";
import Sidebar from "./Sidebar";
import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import ChartSection from "./ChartSection";
import Ranking from "./Ranking";
import "./Dashboard.css";
import Filter from "./Filter";
import { useState } from "react";
import * as XLSX from "xlsx";
import CollegeCircle from "./CollegeCircle";

const apiData = [
  { "roll": 1, "problemsSolved": 532, "college": "AUS", "pool": 3, "branch": "CSE", "codechefRating": 1620, "leetcodeRating": 1850, "codeforcesRating": 1725, "gfgRating": 1550, "highestRating": 1850 },
  { "roll": 2, "problemsSolved": 134, "college": "ACET", "pool": 1, "branch": "AIML", "codechefRating": 1410, "leetcodeRating": 1600, "codeforcesRating": 1500, "gfgRating": 1320, "highestRating": 1600 },
  { "roll": 3, "problemsSolved": 823, "college": "ACOE", "pool": 5, "branch": "IT", "codechefRating": 1900, "leetcodeRating": 2100, "codeforcesRating": 1980, "gfgRating": 1750, "highestRating": 2100 },
  { "roll": 4, "problemsSolved": 78, "college": "AUS", "pool": 2, "branch": "DS", "codechefRating": 1200, "leetcodeRating": 1350, "codeforcesRating": 1250, "gfgRating": 1100, "highestRating": 1350 },
  { "roll": 5, "problemsSolved": 640, "college": "AEC", "pool": 4, "branch": "CSE", "codechefRating": 1750, "leetcodeRating": 1920, "codeforcesRating": 1850, "gfgRating": 1600, "highestRating": 1920 },
  { "roll": 6, "problemsSolved": 245, "college": "AUS", "pool": 1, "branch": "IT", "codechefRating": 1500, "leetcodeRating": 1700, "codeforcesRating": 1600, "gfgRating": 1400, "highestRating": 1700 },
  { "roll": 7, "problemsSolved": 999, "college": "ACET", "pool": 5, "branch": "ECE", "codechefRating": 2000, "leetcodeRating": 2200, "codeforcesRating": 2100, "gfgRating": 1900, "highestRating": 2200 },
  { "roll": 8, "problemsSolved": 412, "college": "ACOE", "pool": 3, "branch": "EEE", "codechefRating": 1680, "leetcodeRating": 1800, "codeforcesRating": 1700, "gfgRating": 1500, "highestRating": 1800 },
  { "roll": 9, "problemsSolved": 300, "college": "AUS", "pool": 2, "branch": "MECH", "codechefRating": 1450, "leetcodeRating": 1600, "codeforcesRating": 1500, "gfgRating": 1350, "highestRating": 1600 },
  { "roll": 10, "problemsSolved": 721, "college": "AEC", "pool": 4, "branch": "CSE", "codechefRating": 1820, "leetcodeRating": 2000, "codeforcesRating": 1900, "gfgRating": 1700, "highestRating": 2000 },
  { "roll": 11, "problemsSolved": 155, "college": "ACET", "pool": 1, "branch": "CIVIL", "codechefRating": 1300, "leetcodeRating": 1450, "codeforcesRating": 1400, "gfgRating": 1200, "highestRating": 1450 },
  { "roll": 12, "problemsSolved": 580, "college": "ACOE", "pool": 3, "branch": "AIML", "codechefRating": 1720, "leetcodeRating": 1880, "codeforcesRating": 1750, "gfgRating": 1600, "highestRating": 1880 },
  { "roll": 13, "problemsSolved": 67, "college": "AUS", "pool": 2, "branch": "IT", "codechefRating": 1150, "leetcodeRating": 1300, "codeforcesRating": 1200, "gfgRating": 1050, "highestRating": 1300 },
  { "roll": 14, "problemsSolved": 835, "college": "AEC", "pool": 5, "branch": "CSE", "codechefRating": 1950, "leetcodeRating": 2100, "codeforcesRating": 2000, "gfgRating": 1800, "highestRating": 2100 },
  { "roll": 15, "problemsSolved": 422, "college": "ACET", "pool": 3, "branch": "ECE", "codechefRating": 1650, "leetcodeRating": 1780, "codeforcesRating": 1700, "gfgRating": 1500, "highestRating": 1780 },
  { "roll": 16, "problemsSolved": 910, "college": "ACOE", "pool": 5, "branch": "CSE", "codechefRating": 2050, "leetcodeRating": 2200, "codeforcesRating": 2100, "gfgRating": 1850, "highestRating": 2200 },
  { "roll": 17, "problemsSolved": 156, "college": "AUS", "pool": 2, "branch": "IT", "codechefRating": 1320, "leetcodeRating": 1450, "codeforcesRating": 1380, "gfgRating": 1200, "highestRating": 1450 },
  { "roll": 18, "problemsSolved": 677, "college": "AEC", "pool": 4, "branch": "EEE", "codechefRating": 1780, "leetcodeRating": 1950, "codeforcesRating": 1820, "gfgRating": 1650, "highestRating": 1950 },
  { "roll": 19, "problemsSolved": 245, "college": "ACET", "pool": 1, "branch": "MECH", "codechefRating": 1480, "leetcodeRating": 1600, "codeforcesRating": 1520, "gfgRating": 1350, "highestRating": 1600 },
  { "roll": 20, "problemsSolved": 830, "college": "ACOE", "pool": 5, "branch": "AIML", "codechefRating": 1920, "leetcodeRating": 2100, "codeforcesRating": 2000, "gfgRating": 1750, "highestRating": 2100 },
  { "roll": 21, "problemsSolved": 310, "college": "AUS", "pool": 2, "branch": "CIVIL", "codechefRating": 1400, "leetcodeRating": 1550, "codeforcesRating": 1480, "gfgRating": 1300, "highestRating": 1550 },
  { "roll": 22, "problemsSolved": 599, "college": "AEC", "pool": 4, "branch": "CSE", "codechefRating": 1760, "leetcodeRating": 1900, "codeforcesRating": 1800, "gfgRating": 1620, "highestRating": 1900 },
  { "roll": 23, "problemsSolved": 72, "college": "ACET", "pool": 1, "branch": "EEE", "codechefRating": 1180, "leetcodeRating": 1300, "codeforcesRating": 1220, "gfgRating": 1050, "highestRating": 1300 },
  { "roll": 24, "problemsSolved": 940, "college": "ACOE", "pool": 5, "branch": "CSE", "codechefRating": 2100, "leetcodeRating": 2250, "codeforcesRating": 2150, "gfgRating": 1900, "highestRating": 2250 },
  
  // 10 new records
  { "roll": 25, "problemsSolved": 420, "college": "AUS", "pool": 3, "branch": "CSE", "codechefRating": 1600, "leetcodeRating": 1750, "codeforcesRating": 1680, "gfgRating": 1500, "highestRating": 1750 },
  { "roll": 26, "problemsSolved": 315, "college": "ACET", "pool": 2, "branch": "AIML", "codechefRating": 1550, "leetcodeRating": 1650, "codeforcesRating": 1600, "gfgRating": 1450, "highestRating": 1650 },
  { "roll": 27, "problemsSolved": 875, "college": "ACOE", "pool": 5, "branch": "IT", "codechefRating": 2000, "leetcodeRating": 2150, "codeforcesRating": 2100, "gfgRating": 1850, "highestRating": 2150 },
  { "roll": 28, "problemsSolved": 190, "college": "AUS", "pool": 1, "branch": "DS", "codechefRating": 1300, "leetcodeRating": 1450, "codeforcesRating": 1380, "gfgRating": 1200, "highestRating": 1450 },
  { "roll": 29, "problemsSolved": 670, "college": "ACET", "pool": 4, "branch": "CSE", "codechefRating": 1800, "leetcodeRating": 1950, "codeforcesRating": 1850, "gfgRating": 1600, "highestRating": 1950 },
  { "roll": 30, "problemsSolved": 510, "college": "ACOE", "pool": 3, "branch": "AIML", "codechefRating": 1700, "leetcodeRating": 1850, "codeforcesRating": 1750, "gfgRating": 1550, "highestRating": 1850 },
  { "roll": 31, "problemsSolved": 305, "college": "AUS", "pool": 2, "branch": "IT", "codechefRating": 1500, "leetcodeRating": 1650, "codeforcesRating": 1580, "gfgRating": 1400, "highestRating": 1650 },
  { "roll": 32, "problemsSolved": 780, "college": "ACET", "pool": 5, "branch": "ECE", "codechefRating": 1950, "leetcodeRating": 2100, "codeforcesRating": 2000, "gfgRating": 1750, "highestRating": 2100 },
  { "roll": 33, "problemsSolved": 780, "college": "ACET", "pool": 5, "branch": "ECE", "codechefRating": 1950, "leetcodeRating": 2100, "codeforcesRating": 2000, "gfgRating": 1750, "highestRating": 2100 }
];




const Dashboard = () => {
  const sidebarItems = [
    "Overall",
    "Pool 1",
    "Pool 2",
    "Pool 3",
    "Pool 4",
    "Pool 5",
  ];

  const filterItems = [
    "Coding Problem",
    "Contest Rating",
    "Highest Contest Rating",
  ];

  const [codingType,setCoding_type]=useState(0)
  const coding_feature=(idx)=>{
    setCoding_type(idx);
  }
  const [finalArr,setArr]=useState([0,0,0,0,0,0]);
  const [List,setList]=useState([]);
  const [selectedPool, setSelectedPool] = useState(0);   
const [selectedColleges, setSelectedColleges] = useState(["aec","acet","aceo"]);
const [selectedBranches, setSelectedBranches] = useState([]);
const [selectedPlatforms, setSelectedPlatforms] = useState([]);

const updateRecords=(idx)=>{
  setSelectedPool(idx)
  applyFilters(idx,selectedColleges,selectedBranches,selectedPlatforms)
}
const [college,setcollege]=useState([0,0,0])

const applyFilters = (pool, colleges, branches, platforms) => {
  let filtered = apiData;

  // pool filter
  if (pool !== 0) {
    filtered = filtered.filter(item => item.pool === pool);
  }
  // college filter
  if (colleges.length > 0) {
    const counts = [0, 0, 0];

    filtered.forEach(item => {
      const name = item.college.toLowerCase();
      if (name === "aec") counts[0]++;
      if (name === "acet") counts[1]++;
      if (name === "acoe") counts[2]++;
    });
    console.log(counts)
    setcollege(counts);
    // filtered = filtered.filter(item =>
    //   colleges.includes(item.college?.toLowerCase())
    // );

  }

  // branch filter
  if (branches.length > 0) {
    filtered = filtered.filter(item =>
      branches.includes(item.branch?.toLowerCase())
    );
  }

  // platform filter
  if (platforms.length > 0) {
    filtered = filtered.filter(item =>
      platforms.includes(item.platform?.toLowerCase())
    );
  }

  setList(filtered);
  updateGraph(filtered);
};
const updateGraph = (List) => {
  let arr = new Array(6).fill(0);

  if (codingType === 0) {
    List.forEach((ele) => {
      if (ele.problemsSolved > 0 && ele.problemsSolved < 100) arr[0]++;
      else if (ele.problemsSolved >= 100 && ele.problemsSolved < 200) arr[1]++;
      else if (ele.problemsSolved >= 200 && ele.problemsSolved < 300) arr[2]++;
      else if (ele.problemsSolved >= 300 && ele.problemsSolved < 400) arr[3]++;
      else if (ele.problemsSolved >= 400 && ele.problemsSolved < 500) arr[4]++;
      else arr[5]++;
    });
  } else if (codingType === 1) {
    List.forEach((ele) => {
      let rating = ele.highestRating;
      if (rating < 1000) arr[0]++;
      else if (rating >= 1000 && rating < 1300) arr[1]++;
      else if (rating >= 1300 && rating < 1500) arr[2]++;
      else if (rating >= 1500 && rating < 1700) arr[3]++;
      else arr[4]++;
    });
  }

  setArr([...arr]);
};


const handleCollegeChange=(e)=>{
  let li=selectedColleges
  let check=e.target;
  if(check.checked){
    li.push(e.target.value)
  }else{
    li=li.filter(ele=>ele!=e.target.value)
  }
  console.log(li)
  setSelectedColleges(li);
  applyFilters(selectedPool,li,selectedBranches,selectedPlatforms)
}
const handleBranchChange=(e)=>{
  let li=selectedBranches
  let check=e.target;
  if(check.checked){
    li.push(e.target.value)
  }else{
    li=li.filter(ele=>ele!=e.target.value)
  }
  setSelectedBranches(li)
  applyFilters(selectedPool,selectedColleges,li,selectedPlatforms)
}

const handlePlatformChange=(e)=>{
  let li=selectedPlatforms
  let check=e.target;
  if(check.checked){
    li.push(e.target.value)
  }else{
    li=li.filter(ele=>ele!=e.target.value)
  }
  setSelectedPlatforms(li)
  applyFilters(selectedPool,selectedColleges,selectedBranches,li)
}






const download=()=>{
  const ws=XLSX.utils.json_to_sheet(List);
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,"Sheet1");
  XLSX.writeFile(wb,"data.xlsx");
}

  let chartData = [];

if (codingType === 0) {
  chartData = [
    { name: "<100", value: finalArr[0] },
    { name: "100-199", value: finalArr[1] },
    { name: "200-299", value: finalArr[2] },
    { name: "300-399", value: finalArr[3] },
    { name: "400-499", value: finalArr[4] },
    { name: ">500", value: finalArr[5] }
  ];
} else if (codingType === 1) {
  chartData = [
    { name: "<1000", value: finalArr[0] },
    { name: "1000-1299", value: finalArr[1] },
    { name: "1299-1499", value: finalArr[2] },
    { name: "1499-1699", value: finalArr[3] },
    { name: ">=1699", value: finalArr[4] },
  ];
} else if (codingType === 2) {
  chartData = [
    { name: "<1000", value: 10 },
    { name: "1000-1299", value: 35 },
    { name: "1299-1499", value: 15 },
    { name: "1499-1699", value: 20 },
    { name: ">=1699", value: 15 },
  ];
}

// }
  
  const rankingUsers = ["23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX"];

  return (
    <div className="dashboard">
      <Sidebar items={sidebarItems} updateRecords={updateRecords} />
      <div className="main-content">
        <FilterButtons filters={filterItems} coding_feature={coding_feature}/>
        <SearchBar />
        <div className="chart-ranking">
          <ChartSection data={chartData} download={download} />
        </div>
      </div>
      <div className="filtercss">
        <CollegeCircle data={college} />
        <Filter handleCollegeChange={handleCollegeChange} handleBranchChange={handleBranchChange} handlePlatformChange={handlePlatformChange}/>
      </div>
    </div>
  );
};

export default Dashboard;