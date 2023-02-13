import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Coins } from "./components/Coins";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Coin } from "./routes/Coin";
import { MarketsResponse } from "./components/shared/interfaces";

function App() {
  const [coins, setCoins] = useState<MarketsResponse[]>();
  const [filter, setFilter] = useState(10);

  useEffect(() => {
    callApi(filter);
  }, [filter]);

  const handleFilter = (flt: number) => {
    if (flt !== filter) {
      setFilter(flt);
      callApi(flt);
    }
  };

  const callApi = (flt: number) => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=" +
      flt +
      "&page=1&sparkline=false";
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Coins
              coins={coins}
              filter={filter}
              handleFilter={handleFilter}
              items={coins ? coins.length : 0}
            />
          }
        />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
