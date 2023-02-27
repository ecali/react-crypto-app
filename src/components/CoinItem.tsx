import './coins.css';
import {MarketsResponse} from "./shared/interfaces";

export const CoinItem = (props: { coin: MarketsResponse }) => {
  let className24h: string;
  if(props.coin.price_change_percentage_24h < 0){
    className24h = 'red'
  }else{
    className24h = 'green'
  }
  return (
    <div className="coin-row">
      <p>{props.coin.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coin.image} alt={props.coin.symbol} />
        <p>{props.coin.symbol.toUpperCase()}</p>
      </div>
      <p>{props.coin.current_price.toLocaleString()} €</p>
      <p className={className24h} >{props.coin.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hide-mobile">{props.coin.total_volume.toLocaleString()} €</p>
      <p className="hide-mobile">{props.coin.market_cap.toLocaleString()} €</p>
    </div>
  );
};
