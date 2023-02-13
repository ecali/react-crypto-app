import { Link } from "react-router-dom";
import { CoinItem } from "./CoinItem";
import "./coins.css";
import { Filter } from "./Filter";
import {Error} from './Error';
import { MarketsResponse } from "./shared/interfaces";

export const Coins = (props: {
  coins: MarketsResponse[] | undefined;
  filter: number;
  handleFilter: (flt: number) => void;
  items: number;
}) => {
  return (
    <div className="container">
      {props.coins && props.coins.length > 0 ? (
        <div className="">
          <Filter
            filter={props.filter}
            handleFilter={props.handleFilter}
            items={props.items}
          />
          <div className="heading">
            <p>#</p>
            <p className="coin-name">Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className="hide-mobile">Value</p>
            <p className="hide-mobile">Mkt Cap</p>
          </div>
          {props.coins.map((coin) => {
            return (
              <Link to={"/coin/" + coin.id} key={coin.id}>
                <CoinItem coin={coin} />
              </Link>
            );
          })}
        </div>
      ) : (
        <Error home={false}/>
      )}
    </div>
  );
};
