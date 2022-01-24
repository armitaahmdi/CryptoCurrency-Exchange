import React, { useEffect, useState } from 'react';

// API
import { getCoin } from '../services/api';

// Components
import Loader from './Loader';
import Coin from './Coin'

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data)
            setCoins(data)
        }

        fetchAPI();
    }, [])

    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    // toLoweCase baraye inke javascript be horof hasase age to search masalan bit bznim onai ke Bit hast ro nmiare
    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <input type='search'
                placeholder='Search'
                value={search}
                onChange={searchHandler}
            />
            {
                coins.length ?
                    <div>
                        {
                            searchCoins.map(coin => <Coin
                                key={coin.id}
                                name={coin.id}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.market_cap_change_24h}
                            />)
                        }
                    </div>
                    :
                    <Loader />
            }

        </>
    );
};

export default Landing;