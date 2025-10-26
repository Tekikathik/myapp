import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './CollegeCircle.css'
import { useEffect} from 'react';

export default function CollegeCircle({data}) {
  const [state, setState] = React.useState({
    series: [0,0,0],
    options: {
      chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            offsetX: -8,
            fontSize: '16px',
            formatter: function (seriesName, opts) {
              return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
            },
          },
        },
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels: ['AEC', 'ACET', 'ACOE'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  });
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      series: [data[0], data[1], data[2]],
    }));
  }, [data]);
  return (
    <div>
      <div id="chart" className='circle'>
        <ReactApexChart options={state.options} series={state.series} type="radialBar" height={390} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
