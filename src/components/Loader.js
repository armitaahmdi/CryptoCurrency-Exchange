import React from 'react';

// Gif
import spinner from '../gif/spinner.gif'

const Loader = () => {
    return (
        <>
            <img src={spinner} alt='Loading' />
            <h1>Loading...</h1>
        </>
    );
};

export default Loader;