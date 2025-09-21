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

const apiData = [
  {"roll":1,"problemsSolved":532,"college":"AUS","pool":3,"branch":"CSE"},
  {"roll":2,"problemsSolved":134,"college":"ACET","pool":1,"branch":"AIML"},
  {"roll":3,"problemsSolved":823,"college":"ACOE","pool":5,"branch":"IT"},
  {"roll":4,"problemsSolved":78,"college":"AUS","pool":2,"branch":"DS"},
  {"roll":5,"problemsSolved":642,"college":"ACET","pool":4,"branch":"CSE"},
  {"roll":6,"problemsSolved":215,"college":"ACOE","pool":1,"branch":"AIML"},
  {"roll":7,"problemsSolved":999,"college":"AUS","pool":5,"branch":"IT"},
  {"roll":8,"problemsSolved":31,"college":"ACET","pool":2,"branch":"DS"},
  {"roll":9,"problemsSolved":486,"college":"ACOE","pool":3,"branch":"CSE"},
  {"roll":10,"problemsSolved":755,"college":"AUS","pool":4,"branch":"AIML"},
  {"roll":11,"problemsSolved":423,"college":"ACET","pool":1,"branch":"IT"},
  {"roll":12,"problemsSolved":167,"college":"ACOE","pool":2,"branch":"DS"},
  {"roll":13,"problemsSolved":892,"college":"AUS","pool":5,"branch":"CSE"},
  {"roll":14,"problemsSolved":50,"college":"ACET","pool":3,"branch":"AIML"},
  {"roll":15,"problemsSolved":712,"college":"ACOE","pool":4,"branch":"IT"},
  {"roll":16,"problemsSolved":91,"college":"AUS","pool":2,"branch":"DS"},
  {"roll":17,"problemsSolved":605,"college":"ACET","pool":1,"branch":"CSE"},
  {"roll":18,"problemsSolved":350,"college":"ACOE","pool":5,"branch":"AIML"},
  {"roll":19,"problemsSolved":888,"college":"AUS","pool":3,"branch":"IT"},
  {"roll":20,"problemsSolved":472,"college":"ACET","pool":4,"branch":"DS"},
  {"roll":21,"problemsSolved":390,"college":"ACOE","pool":2,"branch":"CSE"},
  {"roll":22,"problemsSolved":215,"college":"AUS","pool":1,"branch":"AIML"},
  {"roll":23,"problemsSolved":587,"college":"ACET","pool":5,"branch":"IT"},
  {"roll":24,"problemsSolved":924,"college":"ACOE","pool":4,"branch":"DS"},
  {"roll":25,"problemsSolved":366,"college":"AUS","pool":3,"branch":"CSE"},
  {"roll":26,"problemsSolved":847,"college":"ACET","pool":2,"branch":"AIML"},
  {"roll":27,"problemsSolved":476,"college":"ACOE","pool":1,"branch":"IT"},
  {"roll":28,"problemsSolved":198,"college":"AUS","pool":5,"branch":"DS"},
  {"roll":29,"problemsSolved":525,"college":"ACET","pool":4,"branch":"CSE"},
  {"roll":30,"problemsSolved":753,"college":"ACOE","pool":3,"branch":"AIML"},
  {"roll":31,"problemsSolved":115,"college":"AUS","pool":2,"branch":"IT"},
  {"roll":32,"problemsSolved":658,"college":"ACET","pool":1,"branch":"DS"},
  {"roll":33,"problemsSolved":889,"college":"ACOE","pool":5,"branch":"CSE"},
  {"roll":34,"problemsSolved":276,"college":"AUS","pool":4,"branch":"AIML"},
  {"roll":35,"problemsSolved":404,"college":"ACET","pool":3,"branch":"IT"},
  {"roll":36,"problemsSolved":967,"college":"ACOE","pool":2,"branch":"DS"},
  {"roll":37,"problemsSolved":214,"college":"AUS","pool":1,"branch":"CSE"},
  {"roll":38,"problemsSolved":555,"college":"ACET","pool":5,"branch":"AIML"},
  {"roll":39,"problemsSolved":825,"college":"ACOE","pool":4,"branch":"IT"},
  {"roll":40,"problemsSolved":189,"college":"AUS","pool":3,"branch":"DS"},
  {"roll":41,"problemsSolved":734,"college":"ACET","pool":2,"branch":"CSE"},
  {"roll":42,"problemsSolved":353,"college":"ACOE","pool":1,"branch":"AIML"},
  {"roll":43,"problemsSolved":624,"college":"AUS","pool":5,"branch":"IT"},
  {"roll":44,"problemsSolved":143,"college":"ACET","pool":4,"branch":"DS"},
  {"roll":45,"problemsSolved":976,"college":"ACOE","pool":3,"branch":"CSE"},
  {"roll":46,"problemsSolved":503,"college":"AUS","pool":2,"branch":"AIML"},
  {"roll":47,"problemsSolved":392,"college":"ACET","pool":1,"branch":"IT"},
  {"roll":48,"problemsSolved":834,"college":"ACOE","pool":5,"branch":"DS"},
  {"roll":49,"problemsSolved":247,"college":"AUS","pool":4,"branch":"CSE"},
  {"roll":50,"problemsSolved":681,"college":"ACET","pool":3,"branch":"AIML"},
  {"roll":51,"problemsSolved":320,"college":"ACOE","pool":2,"branch":"IT"},
  {"roll":52,"problemsSolved":591,"college":"AUS","pool":1,"branch":"DS"},
  {"roll":53,"problemsSolved":266,"college":"ACET","pool":5,"branch":"CSE"},
  {"roll":54,"problemsSolved":934,"college":"ACOE","pool":4,"branch":"AIML"},
  {"roll":55,"problemsSolved":485,"college":"AUS","pool":3,"branch":"IT"},
  {"roll":56,"problemsSolved":709,"college":"ACET","pool":2,"branch":"DS"},
  {"roll":57,"problemsSolved":420,"college":"ACOE","pool":1,"branch":"CSE"},
  {"roll":58,"problemsSolved":856,"college":"AUS","pool":5,"branch":"AIML"},
  {"roll":59,"problemsSolved":162,"college":"ACET","pool":4,"branch":"IT"},
  {"roll":60,"problemsSolved":633,"college":"ACOE","pool":3,"branch":"DS"},
  {"roll":61,"problemsSolved":204,"college":"AUS","pool":2,"branch":"CSE"},
  {"roll":62,"problemsSolved":579,"college":"ACET","pool":1,"branch":"AIML"},
  {"roll":63,"problemsSolved":790,"college":"ACOE","pool":5,"branch":"IT"},
  {"roll":64,"problemsSolved":465,"college":"AUS","pool":4,"branch":"DS"},
  {"roll":65,"problemsSolved":105,"college":"ACET","pool":3,"branch":"CSE"},
  {"roll":66,"problemsSolved":666,"college":"ACOE","pool":2,"branch":"AIML"},
  {"roll":67,"problemsSolved":317,"college":"AUS","pool":1,"branch":"IT"},
  {"roll":68,"problemsSolved":958,"college":"ACET","pool":5,"branch":"DS"},
  {"roll":69,"problemsSolved":539,"college":"ACOE","pool":4,"branch":"CSE"},
  {"roll":70,"problemsSolved":174,"college":"AUS","pool":3,"branch":"AIML"},
  {"roll":71,"problemsSolved":612,"college":"ACET","pool":2,"branch":"IT"},
  {"roll":72,"problemsSolved":378,"college":"ACOE","pool":1,"branch":"DS"},
  {"roll":73,"problemsSolved":891,"college":"AUS","pool":5,"branch":"CSE"},
  {"roll":74,"problemsSolved":251,"college":"ACET","pool":4,"branch":"AIML"},
  {"roll":75,"problemsSolved":745,"college":"ACOE","pool":3,"branch":"IT"},
  {"roll":76,"problemsSolved":198,"college":"AUS","pool":2,"branch":"DS"},
  {"roll":77,"problemsSolved":583,"college":"ACET","pool":1,"branch":"CSE"},
  {"roll":78,"problemsSolved":439,"college":"ACOE","pool":5,"branch":"AIML"},
  {"roll":79,"problemsSolved":774,"college":"AUS","pool":4,"branch":"IT"},
  {"roll":80,"problemsSolved":302,"college":"ACET","pool":3,"branch":"DS"},
  {"roll":81,"problemsSolved":692,"college":"ACOE","pool":2,"branch":"CSE"},
  {"roll":82,"problemsSolved":215,"college":"AUS","pool":1,"branch":"AIML"},
  {"roll":83,"problemsSolved":558,"college":"ACET","pool":5,"branch":"IT"},
  {"roll":84,"problemsSolved":924,"college":"ACOE","pool":4,"branch":"DS"},
  {"roll":85,"problemsSolved":333,"college":"AUS","pool":3,"branch":"CSE"},
  {"roll":86,"problemsSolved":713,"college":"ACET","pool":2,"branch":"AIML"},
  {"roll":87,"problemsSolved":145,"college":"ACOE","pool":1,"branch":"IT"},
  {"roll":88,"problemsSolved":986,"college":"AUS","pool":5,"branch":"DS"},
  {"roll":89,"problemsSolved":276,"college":"ACET","pool":4,"branch":"CSE"},
  {"roll":90,"problemsSolved":842,"college":"ACOE","pool":3,"branch":"AIML"},
  {"roll":91,"problemsSolved":361,"college":"AUS","pool":2,"branch":"IT"},
  {"roll":92,"problemsSolved":607,"college":"ACET","pool":1,"branch":"DS"},
  {"roll":93,"problemsSolved":473,"college":"ACOE","pool":5,"branch":"CSE"},
  {"roll":94,"problemsSolved":864,"college":"AUS","pool":4,"branch":"AIML"},
  {"roll":95,"problemsSolved":293,"college":"ACET","pool":3,"branch":"IT"},
  {"roll":96,"problemsSolved":657,"college":"ACOE","pool":2,"branch":"DS"},
  {"roll":97,"problemsSolved":402,"college":"AUS","pool":1,"branch":"CSE"},
  {"roll":98,"problemsSolved":735,"college":"ACET","pool":5,"branch":"AIML"},
  {"roll":99,"problemsSolved":521,"college":"ACOE","pool":4,"branch":"IT"},
  {"roll":100,"problemsSolved":319,"college":"AUS","pool":3,"branch":"DS"}
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
  const [finalArr,setArr]=useState([0,0,0,0,0,0]);
  const [List,setList]=useState([]);
  const [selectedPool, setSelectedPool] = useState(0);   
const [selectedColleges, setSelectedColleges] = useState([]);
const [selectedBranches, setSelectedBranches] = useState([]);
const [selectedPlatforms, setSelectedPlatforms] = useState([]);

const updateRecords=(idx)=>{
  setSelectedPool(idx)
  applyFilters(idx,selectedColleges,selectedBranches,selectedPlatforms)

}

const applyFilters = (pool, colleges, branches, platforms) => {
  let filtered = apiData;

  // pool filter
  if (pool !== 0) {
    filtered = filtered.filter(item => item.pool === pool);
  }

  // college filter
  if (colleges.length > 0) {
    filtered = filtered.filter(item =>
      colleges.includes(item.college.toLowerCase())
    );
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
const updateGraph=(List)=>{
  let arr = new Array(6).fill(0);
  List.map((ele)=>{
  if(ele.problemsSolved>0 && ele.problemsSolved<100) arr[0]++;
  else if(ele.problemsSolved>=100 && ele.problemsSolved<200) arr[1]++;
  else if(ele.problemsSolved>=200 && ele.problemsSolved<300) arr[2]++;
  else if(ele.problemsSolved>=300 && ele.problemsSolved<400) arr[3]++;
  else if(ele.problemsSolved>=400 && ele.problemsSolved<500) arr[4]++;
  else arr[5]++;
})
setArr([...arr])
}

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


  const chartData = [
    { name: "<100", value: finalArr[0] },
    { name: "100-199", value: finalArr[1] },
    { name: "200-299", value: finalArr[2]},
    { name: "300-399", value: finalArr[3] },
    {name:  "400-499",   value: finalArr[4]},
    {name:  ">500",   value:  finalArr[5]}
  ];

  const rankingUsers = ["23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX", "23A91A61XX"];

  return (
    <div className="dashboard">
      <Sidebar items={sidebarItems} updateRecords={updateRecords} />
      <div className="main-content">
        <FilterButtons filters={filterItems} />
        <SearchBar />
        <div className="chart-ranking">
          <ChartSection data={chartData} download={download} />
        </div>
      </div>
      <div className="filtercss">
        <Filter handleCollegeChange={handleCollegeChange} handleBranchChange={handleBranchChange} handlePlatformChange={handlePlatformChange}/>
      </div>
    </div>
  );
};

export default Dashboard;
