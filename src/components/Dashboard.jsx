import React from "react";
import Sidebar from "./Sidebar";
import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import ChartSection from "./ChartSection";
import Ranking from "./Ranking";
import "./Dashboard.css";
import Filter from "./Filter";
import { useState } from "react";

const apiData=[
  {"roll":1,"problemsSolved":12,"college":"AUS","pool":3},
  {"roll":2,"problemsSolved":134,"college":"ACET","pool":1},
  {"roll":3,"problemsSolved":876,"college":"ACOE","pool":5},
  {"roll":4,"problemsSolved":478,"college":"AUS","pool":2},
  {"roll":5,"problemsSolved":990,"college":"ACET","pool":4},
  {"roll":6,"problemsSolved":150,"college":"ACOE","pool":1},
  {"roll":7,"problemsSolved":667,"college":"AUS","pool":2},
  {"roll":8,"problemsSolved":222,"college":"ACET","pool":5},
  {"roll":9,"problemsSolved":349,"college":"ACOE","pool":3},
  {"roll":10,"problemsSolved":815,"college":"AUS","pool":4},
  {"roll":11,"problemsSolved":431,"college":"ACET","pool":2},
  {"roll":12,"problemsSolved":690,"college":"ACOE","pool":1},
  {"roll":13,"problemsSolved":127,"college":"AUS","pool":5},
  {"roll":14,"problemsSolved":554,"college":"ACET","pool":4},
  {"roll":15,"problemsSolved":366,"college":"ACOE","pool":3},
  {"roll":16,"problemsSolved":298,"college":"AUS","pool":2},
  {"roll":17,"problemsSolved":999,"college":"ACET","pool":1},
  {"roll":18,"problemsSolved":542,"college":"ACOE","pool":5},
  {"roll":19,"problemsSolved":763,"college":"AUS","pool":4},
  {"roll":20,"problemsSolved":331,"college":"ACET","pool":3},
  {"roll":21,"problemsSolved":601,"college":"ACOE","pool":2},
  {"roll":22,"problemsSolved":444,"college":"AUS","pool":1},
  {"roll":23,"problemsSolved":287,"college":"ACET","pool":5},
  {"roll":24,"problemsSolved":913,"college":"ACOE","pool":4},
  {"roll":25,"problemsSolved":366,"college":"AUS","pool":3},
  {"roll":26,"problemsSolved":847,"college":"ACET","pool":2},
  {"roll":27,"problemsSolved":476,"college":"ACOE","pool":1},
  {"roll":28,"problemsSolved":198,"college":"AUS","pool":5},
  {"roll":29,"problemsSolved":525,"college":"ACET","pool":4},
  {"roll":30,"problemsSolved":753,"college":"ACOE","pool":3},
  {"roll":31,"problemsSolved":115,"college":"AUS","pool":2},
  {"roll":32,"problemsSolved":658,"college":"ACET","pool":1},
  {"roll":33,"problemsSolved":889,"college":"ACOE","pool":5},
  {"roll":34,"problemsSolved":276,"college":"AUS","pool":4},
  {"roll":35,"problemsSolved":404,"college":"ACET","pool":3},
  {"roll":36,"problemsSolved":967,"college":"ACOE","pool":2},
  {"roll":37,"problemsSolved":214,"college":"AUS","pool":1},
  {"roll":38,"problemsSolved":555,"college":"ACET","pool":5},
  {"roll":39,"problemsSolved":825,"college":"ACOE","pool":4},
  {"roll":40,"problemsSolved":189,"college":"AUS","pool":3},
  {"roll":41,"problemsSolved":734,"college":"ACET","pool":2},
  {"roll":42,"problemsSolved":353,"college":"ACOE","pool":1},
  {"roll":43,"problemsSolved":624,"college":"AUS","pool":5},
  {"roll":44,"problemsSolved":143,"college":"ACET","pool":4},
  {"roll":45,"problemsSolved":976,"college":"ACOE","pool":3},
  {"roll":46,"problemsSolved":503,"college":"AUS","pool":2},
  {"roll":47,"problemsSolved":392,"college":"ACET","pool":1},
  {"roll":48,"problemsSolved":834,"college":"ACOE","pool":5},
  {"roll":49,"problemsSolved":247,"college":"AUS","pool":4},
  {"roll":50,"problemsSolved":681,"college":"ACET","pool":3},
  {"roll":51,"problemsSolved":320,"college":"ACOE","pool":2},
  {"roll":52,"problemsSolved":591,"college":"AUS","pool":1},
  {"roll":53,"problemsSolved":266,"college":"ACET","pool":5},
  {"roll":54,"problemsSolved":934,"college":"ACOE","pool":4},
  {"roll":55,"problemsSolved":485,"college":"AUS","pool":3},
  {"roll":56,"problemsSolved":709,"college":"ACET","pool":2},
  {"roll":57,"problemsSolved":420,"college":"ACOE","pool":1},
  {"roll":58,"problemsSolved":856,"college":"AUS","pool":5},
  {"roll":59,"problemsSolved":162,"college":"ACET","pool":4},
  {"roll":60,"problemsSolved":633,"college":"ACOE","pool":3},
  {"roll":61,"problemsSolved":204,"college":"AUS","pool":2},
  {"roll":62,"problemsSolved":579,"college":"ACET","pool":1},
  {"roll":63,"problemsSolved":790,"college":"ACOE","pool":5},
  {"roll":64,"problemsSolved":465,"college":"AUS","pool":4},
  {"roll":65,"problemsSolved":105,"college":"ACET","pool":3},
  {"roll":66,"problemsSolved":666,"college":"ACOE","pool":2},
  {"roll":67,"problemsSolved":317,"college":"AUS","pool":1},
  {"roll":68,"problemsSolved":958,"college":"ACET","pool":5},
  {"roll":69,"problemsSolved":539,"college":"ACOE","pool":4},
  {"roll":70,"problemsSolved":174,"college":"AUS","pool":3},
  {"roll":71,"problemsSolved":612,"college":"ACET","pool":2},
  {"roll":72,"problemsSolved":378,"college":"ACOE","pool":1},
  {"roll":73,"problemsSolved":891,"college":"AUS","pool":5},
  {"roll":74,"problemsSolved":251,"college":"ACET","pool":4},
  {"roll":75,"problemsSolved":745,"college":"ACOE","pool":3},
  {"roll":76,"problemsSolved":198,"college":"AUS","pool":2},
  {"roll":77,"problemsSolved":583,"college":"ACET","pool":1},
  {"roll":78,"problemsSolved":439,"college":"ACOE","pool":5},
  {"roll":79,"problemsSolved":774,"college":"AUS","pool":4},
  {"roll":80,"problemsSolved":302,"college":"ACET","pool":3},
  {"roll":81,"problemsSolved":692,"college":"ACOE","pool":2},
  {"roll":82,"problemsSolved":215,"college":"AUS","pool":1},
  {"roll":83,"problemsSolved":558,"college":"ACET","pool":5},
  {"roll":84,"problemsSolved":924,"college":"ACOE","pool":4},
  {"roll":85,"problemsSolved":333,"college":"AUS","pool":3},
  {"roll":86,"problemsSolved":713,"college":"ACET","pool":2},
  {"roll":87,"problemsSolved":145,"college":"ACOE","pool":1},
  {"roll":88,"problemsSolved":986,"college":"AUS","pool":5},
  {"roll":89,"problemsSolved":276,"college":"ACET","pool":4},
  {"roll":90,"problemsSolved":842,"college":"ACOE","pool":3},
  {"roll":91,"problemsSolved":361,"college":"AUS","pool":2},
  {"roll":92,"problemsSolved":607,"college":"ACET","pool":1},
  {"roll":93,"problemsSolved":473,"college":"ACOE","pool":5},
  {"roll":94,"problemsSolved":864,"college":"AUS","pool":4},
  {"roll":95,"problemsSolved":293,"college":"ACET","pool":3},
  {"roll":96,"problemsSolved":657,"college":"ACOE","pool":2},
  {"roll":97,"problemsSolved":402,"college":"AUS","pool":1},
  {"roll":98,"problemsSolved":735,"college":"ACET","pool":5},
  {"roll":99,"problemsSolved":521,"college":"ACOE","pool":4},
 
]



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
  // let li=[];
const updateRecords=(idx)=>{
  let li=[]
  let arr = new Array(6).fill(0);
  apiData.map((ele)=>{
  //   if(idx==0){
  // if(ele.problemsSolved>0 && ele.problemsSolved<100) arr[0]++;
  // else if(ele.problemsSolved>=100 && ele.problemsSolved<200) arr[1]++;
  // else if(ele.problemsSolved>=200 && ele.problemsSolved<300) arr[2]++;
  // else if(ele.problemsSolved>=300 && ele.problemsSolved<400) arr[3]++;
  // else if(ele.problemsSolved>=400 && ele.problemsSolved<500) arr[4]++;
  // else arr[5]++;
  // li.push(ele)
  //   }
    
      if(ele.problemsSolved>0 && ele.problemsSolved<100 && ele.pool==idx) arr[0]++;
      else if(ele.problemsSolved>=100 && ele.problemsSolved<200 && ele.pool==idx) arr[1]++;
      else if(ele.problemsSolved>=200 && ele.problemsSolved<300 && ele.pool==idx) arr[2]++;
      else if(ele.problemsSolved>=300 && ele.problemsSolved<400 && ele.pool==idx) arr[3]++;
      else if(ele.problemsSolved>=400 && ele.problemsSolved<500 && ele.pool==idx) arr[4]++;
      else if(ele.problemsSolved>=500 && ele.pool==idx) arr[5]++;
      if(ele.pool==idx) li.push(ele)
    
    
})
// setList(li)
setArr([...arr])
setList(li)


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
