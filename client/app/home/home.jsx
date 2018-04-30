import React from 'react';
import Navbar from './navbar';
import Carousel from './carousel';
import Map from './map';
import Popular from './popularExpedition';
import Featured from './featured';
import Initiative from './initiatives';

const Home = () => (
  <div>
    <Navbar />
    <Carousel />
    <Map />
    <Popular />
    <Featured />
    <Initiative />
  </div>
);

export default Home;
