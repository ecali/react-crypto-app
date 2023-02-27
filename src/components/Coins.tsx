import {Link} from "react-router-dom";
import {CoinItem} from "./CoinItem";
import "./coins.css";
import {Filter} from "./Filter";
import {Error} from './Error';
import {MarketsResponse} from "./shared/interfaces";
import {Loader} from "./Loader";
import {useState} from "react";
import {SearchBar} from "./SearchBar";

export const Coins = (props: {
    coins: MarketsResponse[] | undefined;
    error: boolean;
    loading: boolean;
    items: number;
}) => {

    const [filter, setFilter] = useState(10);
    const [termToSearch, setTermToSearch] = useState<MarketsResponse[] | undefined>([]);

    return (
        <div className="container">

            {props.coins && props.coins.length > 0 && (
                <>
                    <div className="container">
                        <SearchBar list={props.coins} setFilter={setTermToSearch}/>
                    </div>
                    <div className="">
                        { termToSearch?.length === 0 && <Filter
                            filter={filter}
                            handleFilter={setFilter}
                            items={props.items}
                        />}
                        <div className="heading">
                            <p>#</p>
                            <p className="coin-name">Coin</p>
                            <p>Price</p>
                            <p>24h</p>
                            <p className="hide-mobile">Value</p>
                            <p className="hide-mobile">Mkt Cap</p>
                        </div>
                        {
                            termToSearch && termToSearch.map((coin) => {
                                return (
                                    <Link to={"/coin/" + coin.id} key={coin.id}>
                                        <CoinItem coin={coin}/>
                                    </Link>
                                );
                            })}
                        {termToSearch?.length === 0 && props.coins.slice(0, filter).map((coin) => {
                            return (
                                <Link to={"/coin/" + coin.id} key={coin.id}>
                                    <CoinItem coin={coin}/>
                                </Link>
                            );
                        })}
                    </div>
                </>

            )}
            {
                props.error && (<Error home={false}/>)
            }
            {props.loading && (
                <Loader/>
            )}
        </div>
    );
};
