import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Stock.css";

const Stock = ({ x, y, z }) => {
  console.log("Rendering chart...");
  // data----------------------------------------------->
  const data = {
    labels: x,
    datasets: [
      {
        label: "Opening prices",
        data: y,
        backgroundColor: ["rgba(255, 102, 102)"],
        borderColor: ["rgba(255, 102, 102, 1)"],
        borderWidth: 2,
      },

      {
        label: "Closing prices",
        data: z,
        backgroundColor: ["rgba(110, 110, 253)"],
        borderColor: ["rgba(110, 110, 253, 1)"],
        borderWidth: 1.5,
        yAxisId: "prices",
      },
    ],
  };
  // optiions------------------------------------------->
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Days of the month",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Opening prices / day ($)",
        },
      },
      prices: {
        beginAtZero: true,
        position: "right",
        title: {
          display: true,
          text: "Closing prices / day ($)",
        },
      },
    },
    legend: {
      position: "right",
      // labels: {
      //   fontSize: 25,
      // },
    },
  };
  return (
    // configuring the chart------------------------------>
    <Line data={data} height={536} width={100} options={options} />
  );
};

export default Stock;
