import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Stock.css";

const Stock = () => {
  let limitedDates, limitedPrices;
  const [coordinates, setCoordinates] = useState({ x: [], y: [] });
  const [stockSymbol, setStockSymbol] = useState(" ");

  const fetchStock = () => {
    const API_KEY = "nACDvrnheG48-Z-xfLqv";
    let API_Call = `https://data.nasdaq.com/api/v3/datasets/WIKI/${stockSymbol}/data.json?api_key=${API_KEY}
`;
    try {
      fetch(API_Call)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(stockSymbol);
          console.log(data);
          for (const [key, v] of data["dataset_data"]["data"].entries()) {
            setCoordinates(coordinates.x.push(v[0]));
            setCoordinates(coordinates.y.push(v[1]));
          }

          limitedDates = coordinates.x.slice(0, 100);
          limitedPrices = coordinates.y.slice(0, 100);
          console.log(limitedDates); // dates
          console.log(limitedPrices); // prices
        });
    } catch (err) {
      console.error(err);
    }
  };

  const handleStockSymbol = (e) => {
    e.preventDefault();
    setStockSymbol(e.target.value);
  };

  const plotTheChart = () => {
    fetchStock();
    return (
      <Line
        data={{
          labels: coordinates.x,
          datasets: [
            {
              label: "Opening prices",
              data: coordinates.y,
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        height={1200}
        width={1600}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    );
  };

  return (
    <div className="div0">
      <div className="div1">
        <h1>CHARTIST</h1>
      </div>

      <div className="div2">
        <section className="section1">
          <select name="Currency" id="currency">
            <option value="USD">USD</option>
            <option value="Ruppee">RUPPE</option>
          </select>
        </section>

        <section className="section2">
          <input
            type="text"
            placeholder="STOCK SYMBOL"
            onChange={handleStockSymbol}
          ></input>
        </section>

        <section className="section3">
          <button type="submit" onClick={plotTheChart}>
            PLOT
          </button>
        </section>
      </div>
      <div className="div3"></div>
    </div>
  );
};

export default Stock;
