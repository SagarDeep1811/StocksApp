import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Stock.css";

const Stock = ({ x, y, z }) => {
  console.log("Rendering chart...");
  // data----------------------------------------------->
  const data = {
    labels: x,
    // labels: [
    //   "1-2-12",
    //   "2-2-12",
    //   "3-2-12",
    //   "4-2-12",
    //   "5-2-12",
    //   "6-2-12",
    //   "7-2-12",
    //   "8-2-12",
    //   "9-2-12",
    //   "10-2-12",
    //   "11-2-12",
    //   "12-2-12",
    //   "13-2-12",
    //   "14-2-12",
    //   "15-2-12",
    //   "16-2-12",
    //   "17-2-12",
    //   "18-2-12",
    //   "19-2-12",
    //   "20-2-12",
    //   "21-2-12",
    //   "22-2-12",
    //   "23-2-12",
    //   "24-2-12",
    //   "25-2-12",
    //   "26-2-12",
    //   "27-2-12",
    //   "28-2-12",
    //   "29-2-12",
    //   "30-2-12",
    // ],
    datasets: [
      {
        label: "Opening prices",
        data: y,
        // data: [
        //   12,
        //   19,
        //   3,
        //   5,
        //   2,
        //   3,
        //   5,
        //   8,
        //   2,
        //   0,
        //   1,
        //   6,
        //   2,
        //   7,
        //   8,
        //   9,
        //   8,
        //   19,
        //   21,
        //   5,
        //   3,
        //   8,
        //   2,
        //   5,
        //   9,
        //   0,
        //   1,
        //   4,
        //   6,
        //   7,
        //   9,
        //   3,
        // ],
        backgroundColor: ["rgba(255, 102, 102)"],
        borderColor: ["rgba(255, 102, 102, 1)"],
        borderWidth: 2,
      },

      {
        label: "Closing prices",
        data: z,
        // data: [
        //   21,
        //   5,
        //   3,
        //   8,
        //   2,
        //   5,
        //   9,
        //   0,
        //   1,
        //   4,
        //   6,
        //   7,
        //   9,
        //   3,
        //   6,
        //   5,
        //   2,
        //   7,
        //   12,
        //   19,
        //   3,
        //   5,
        //   2,
        //   3,
        //   5,
        //   8,
        //   2,
        //   0,
        //   1,
        //   6,
        //   2,
        //   7,
        // ],
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
