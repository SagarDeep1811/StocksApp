import React, { useState, useEffect } from "react";
import Stock from "./Stock";
// import Stocks2 from "./Stocks2";
import "./Stock.css";
function App() {
  const [coordinates, setCoordinates] = useState({ x: [], y: [], z: [] });
  const [stockSymbol, setStockSymbol] = useState("FB");

  // fetchStocksData()-------------------------------------------------------------->

  const API_KEY = "nACDvrnheG48-Z-xfLqv";
  let API_Call = `https://data.nasdaq.com/api/v3/datasets/WIKI/${stockSymbol}/data.json?api_key=${API_KEY}`;
  const fetchStocksData = (e) => {
    e.preventDefault();
    // API call---------------------------------------------------------
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
        console.log(coordinates.x.slice(0, 30));
        console.log(coordinates.y.slice(0, 30));
        console.log(coordinates.z.slice(0, 30));
      })
      .catch((err) => {
        console.log(err);
      });
    // API call ends--------------------------------------------------
  };

  //------------------------------------------------------------

  return (
    <div className="App">
      <div className="div0">
        <div className="div1">
          <h1>CHARTIST</h1>
          <div className="div2">
            <section className="section2">
              <form onSubmit={fetchStocksData} className="form">
                <input
                  type="text"
                  placeholder="STOCK SYMBOL"
                  onChange={(e) => setStockSymbol(e.target.value)}
                ></input>

                <input type="submit" className="submitButton" value="PLOT" />
              </form>
            </section>
            <section className="section3">
              <button type="submit">ABOUT</button>
            </section>
            <section className="section3">
              <button type="submit">CRYPTOWORLD</button>
            </section>
          </div>
        </div>

        <div className="div3">
          <Stock x={coordinates.x} y={coordinates.y} z={coordinates.z} />
          {/* <Stocks2 stockSymbol={stockSymbol} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
