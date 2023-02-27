import React, {useState} from "react";
import {MarketsResponse} from "./shared/interfaces";
import './searchbar.css';

export const SearchBar = (props: { list: MarketsResponse[], setFilter: (flt: MarketsResponse[]) => void; }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [close, setClose] = useState(true);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        let searchT: string = event.target.value;
        setSearchTerm(searchT);
        handleData(searchT);
    };

    const handleData = (searchT = '') => {
        if (searchT.length > 0) {
            if (searchT.includes(' - ')) {
                const data = getSymbolAndName(searchT);
                if (props.list.filter(item => item.symbol.toLowerCase() === data.symbol).length === 1) {
                    props.setFilter(props.list.filter(item => item.symbol === data.symbol));
                }
            } else {
                props.setFilter(props.list.filter(item => (item.symbol + ' - ' + item.name).toLowerCase().includes(searchTerm.toLowerCase())));
            }
        } else {
            props.setFilter([]);
        }
    }

    const getSymbolAndName = (term: string) => {
        return {
            symbol: term.split(' - ')[0].toLowerCase(),
            name: term.split(' - ')[1].toLowerCase()
        }
    }

    const clearInput = () => {
        setSearchTerm('');
        handleData();
    }

    const handleClose = () => {
        setClose(!close);
        clearInput();
    }

    return (
        <div className="main-search">
            <div className='heading'>
                {!close && <button onClick={clearInput} disabled={!searchTerm}>clear</button>}
                <h3>Search coin</h3>
                <button onClick={handleClose}>{close ? 'OPEN' : 'CLOSE'}</button>
            </div>

            {!close && <>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    list="suggestions"
                />
                <datalist id="suggestions">
                    {props.list
                        .filter((item) => (item.symbol + ' - ' + item.name).toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((item) => (
                            <option key={item.id} value={(item.symbol.toUpperCase() + ' - ' + item.name)}/>
                        ))}
                </datalist>
            </>
            }
        </div>
    );
}
