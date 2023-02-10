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
            return <CoinItem coin={coin} key={coin.id}/>
        })}
      </div>
    </div>
  );
};
