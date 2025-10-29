import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Student_Portal.css';

export default function StudentsPortal() {
  // PIE CHART STATE
  const [pieChart, setPieChart] = useState({
    series: [44, 33, 54, 45],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Leetcode', 'CodeChef', 'GFG', 'CodeForces'],
      colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
      fill: {
        type: 'image',
        opacity: 0.85,
        image: {
          src: [
            'https://leetcode.com/static/images/LeetCode_logo_rvs.png',
            'https://static.startuptalky.com/2021/04/codechef-logo-startuptalky.jpg',
            'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png',
            'https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1',
          ],
          width: 25,
          height: 25,
          imagedHeight: 40,
          imagedWidth: 40,
        },
      },
      stroke: {
        width: 4,
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#111'],
        },
        background: {
          enabled: true,
          foreColor: '#f0ebebff',
          borderWidth: 0,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  // BAR CHART STATE
  const [barChart, setBarChart] = useState({
    series: [
      {
        data: [1280, 330],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 25,
        toolbar: {
            show: false, // hide the 3-line menu
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Coding Rating', 'Coding Problem'],
        labels: {
            show: false, // 👈 hides 0, 500, 1000, 1500
        },
        axisBorder: {
            show: false, // 👈 hides bottom border line
        },
        axisTicks: {
            show: false, // 👈 hides tick marks
        },
        },
    grid: {
        xaxis: {
            lines: {
            show: false, // 👈 removes vertical grid lines
            },
        },
        },
    },
  });

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1><strong>Student Portal</strong></h1>
        </div>

        <div className="bodyy">
          <div className="search-back">
            <div className="back">
              <button>Back to Dashboard</button>
            </div>
            <div className="search">
              <input type="text" placeholder="    Search roll no.." />
              <button>Search</button>
            </div>
          </div>

          <div className="detail-donot">
            <div className="detail">
              <div className="pic"><img src="https://mobile.technicalhub.io:5010/student/23P31A0586.png" alt="" /></div>
              <div className="d1">
                <p><strong>Name : Prince Kumar Singh</strong></p>
                <p><strong>Roll : 23A91A05XX</strong></p>
                <p><strong>Branch : AIML</strong></p>
                <p><strong>College : Aditya College Of Engineering and Technology</strong></p>
                <p><strong>Pool : 5</strong></p>
                <p><strong>Technology : Full Stack With React Native</strong></p>
              </div>
              <div className="d2"></div>
            </div>

            <div className="donot">
              <div id="chart">
                <ReactApexChart
                  options={pieChart.options}
                  series={pieChart.series}
                  type="pie"
                  width={380}
                />
              </div>
            </div>
          </div>

          <div className="coding-profile">
            <div className="leetcode">
                <h1>Codechef</h1>
                <div className='difficulty'>
                    <div> <p>29</p>Easy</div>
                    <div><p>29</p>Medium</div>
                    <div><p>29</p>Hard</div>
                </div>
              <div id="chart">
                <ReactApexChart
                  options={barChart.options}
                  series={barChart.series}
                  type="bar"
                  height={100}
                />
              </div>
              <div id="html-dist"></div>
            </div>
            <div className="leetcode">
                <h1>GFG</h1>
                <div className='difficulty'>
                    <div> <p>29</p>Easy</div>
                    <div><p>29</p>Medium</div>
                    <div><p>29</p>Hard</div>
                </div>
              <div id="chart">
                <ReactApexChart
                  options={barChart.options}
                  series={barChart.series}
                  type="bar"
                  height={100}
                />
              </div>
              <div id="html-dist"></div>
            </div>
            <div className="leetcode">
                <h1>Codeforces</h1>
                <div className='difficulty'>
                    <div> <p>29</p>Easy</div>
                    <div><p>29</p>Medium</div>
                    <div><p>29</p>Hard</div>
                </div>
              <div id="chart">
                <ReactApexChart
                  options={barChart.options}
                  series={barChart.series}
                  type="bar"
                  height={100}
                />
              </div>
              <div id="html-dist"></div>
            </div>
            <div className="leetcode">
                <h1>Leetcode</h1>
                <div className='difficulty'>
                    <div> <p>29</p>Easy</div>
                    <div><p>29</p>Medium</div>
                    <div><p>29</p>Hard</div>
                </div>
              <div id="chart">
                <ReactApexChart
                  options={barChart.options}
                  series={barChart.series}
                  type="bar"
                  height={100}
                />
              </div>
              <div id="html-dist"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
