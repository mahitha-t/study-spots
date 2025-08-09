import React from 'react';
import Header from './components/Header';
import AddSpot from './components/AddSpot';
import SpotList from './components/SpotList';

const Home =() => {
    return(
        <div>
           <Header/>
           <AddSpot/>
           <SpotList/>
        </div>
    )
}

export default Home;