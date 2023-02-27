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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    setLoading(true);
    axios
        .get(url)
        .then((response) => {
          setCoins(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setError(true);
        });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Coins
              coins={coins}
              loading={loading}
              error={error}
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
