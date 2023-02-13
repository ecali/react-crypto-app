export interface MarketsResponse {
    symbol: string,
    name: string,
    image: string,
    id: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    fully_diluted_valuation: number,
    total_volume: number,
    high_24h: number,
    low_24h: number,
    price_change_24h: number,
    price_change_percentage_24h: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    ath: number,
    ath_change_percentage: number,
    ath_date: string,
    atl: number,
    atl_change_percentage: number,
    atl_date: string,
    last_update: string,
}

export interface CoinsTokenResponse {
    id: string,
    symbol: string,
    name: string,
    market_cap_rank: number,
    description: {
        en: string
    },
    image: {
        thumb: string,
        small: string,
        large: string
    },
    market_data :{
        current_price : {
            eur: number,
        },
        price_change_percentage_1h_in_currency: {
            eur: number
        },
        price_change_percentage_24h_in_currency: {
            eur: number
        },
        price_change_percentage_7d_in_currency: {
            eur: number
        },
        price_change_percentage_14d_in_currency: {
            eur: number
        },
        price_change_percentage_30d_in_currency: {
            eur: number
        },
        price_change_percentage_1y_in_currency: {
            eur: number
        },
        high_24h:{
            eur: number
        },
        low_24h: {
            eur: number
        },
        market_cap: {
            eur: number
        },
        circulating_supply: number,
        
    }
}