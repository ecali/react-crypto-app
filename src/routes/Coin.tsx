import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./coin.css";

export const Coin = () => {
    const params = useParams();
  const [coin, setCoin] = useState<any>({});
  const url = "https://api.coingecko.com/api/v3/coins/" + params.coinId;
  useEffect(() => {
    axios.get(url).then((response) => {
        setCoin(response.data);
    }).catch(error => console.log(error))
  }, []);
  return (
    <div className="">
      <h1>{coin.id}</h1>
    </div>
  );
};
