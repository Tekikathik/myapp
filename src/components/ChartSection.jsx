import React, { useState } from "react";
import { Download } from "lucide-react";
import ReactApexChart from "react-apexcharts";
import "./ChartSection.css";
import { useEffect } from "react";

const ChartSection = ({ data, download }) => {
  const [arr, setArr] = useState([]);

  const [state,Setstate] = React.useState({
    series: [
      {
        name: "Male",
        data: arr,
      },
      {
        name: "Female",
        data: [26, 25, 10, 18, 27, 15, 9, 14, 14],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });
  useEffect(() => {
    const values = data.map(ele => ele.value);
    setArr(values);
  }, [data]);
  useEffect(()=>{
    Setstate((prevState)=>({
      ...prevState,
      series: [
        { name: "Male", data: arr },
        prevState.series[1],
      ],
    }))
  },[arr]);
  return (
    <div className="chart-section">

      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
      <div className="download-container">
        <button className="download-btn" onClick={download}>
          <Download className="icon" /> Download
        </button>
      </div>
    </div>
  );
};

export default ChartSection;
