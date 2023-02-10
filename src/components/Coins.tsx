import { Link } from "react-router-dom";
import { CoinItem } from "./CoinItem";
import './coins.css';

export const Coins = (props: { coins: any[] }) => {
  return (
    <div className="container">
      <div className="">
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Value</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
        {props.coins.map(coin => {
            return (<Link to={'/coin/' + coin.id} key={coin.id}>
                <CoinItem coin={coin} />
            </Link> )
        })}
      </div>
    </div>
  );
};
