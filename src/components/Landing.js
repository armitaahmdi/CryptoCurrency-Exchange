import React, { useEffect, useState } from 'react';

// API
import { getCoin } from '../services/api';

// Components
import Loader from './Loader';

const Landing = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data)
            setCoins(data)
        }

        fetchAPI();
    }, [])

    return (
        <>
            <input type='search' placeholder='Search' />
            {
                coins.length ?
                    <div>
                        {
                            coins.map(coin => <p key={coin.id}> {coin.id} </p>)
                        }
                    </div>
                    :
                    <Loader />
            }

        </>
    );
};

export default Landing;