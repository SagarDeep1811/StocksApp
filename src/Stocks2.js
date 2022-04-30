import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Stock.css";

const Stocks2 = ({ stockSymbol }) => {
  const [coordinates, setCoordinates] = useState({ x: [], y: [], z: [] });
  let limitedDates, limitedOpening, limitedClosing;
  // fetchStocksData()-------------------------------------------------------------->

  const API_KEY = "nACDvrnheG48-Z-xfLqv";
  let API_Call = `https://data.nasdaq.com/api/v3/datasets/WIKI/${stockSymbol}/data.json?api_key=${API_KEY}`;
  const fetchStocksData = (e) => {
    e.preventDefault();
    fetch(API_Call)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(stockSymbol);
        console.log(data);
        for (const [key, v] of data["dataset_data"]["data"].entries()) {
          setCoordinates(coordinates.x.push(v[0])); //----dates
          setCoordinates(coordinates.y.push(v[1])); //----opening prices
          setCoordinates(coordinates.z.push(v[2])); //----closing prices
        }
        // --------------------------------------------
        console.log(coordinates.x.slice(0, 30));
        limitedDates = coordinates.x.slice(0, 30);
        console.log(limitedDates);
        // --------------------------------------------
        console.log(coordinates.y.slice(0, 30));
        limitedOpening = coordinates.y.slice(0, 30);
        console.log(limitedOpening);
        // --------------------------------------------
        console.log(coordinates.z.slice(0, 30));
        limitedClosing = coordinates.z.slice(0, 30);
        console.log(limitedClosing);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  fetchStocksData();
  // data----------------------------------------------->
  const data = {
    labels: limitedDates,
    datasets: [
      {
        label: "Opening prices",
        data: limitedOpening,
        backgroundColor: ["rgba(255, 102, 102)"],
        borderColor: ["rgba(255, 102, 102, 1)"],
        borderWidth: 2,
      },

      {
        label: "Closing prices",
        data: limitedClosing,
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
  };
  return <Line data={data} height={536} width={100} options={options} />;
};

export default Stocks2;
