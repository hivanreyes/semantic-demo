import React from 'react';
import Navbar from './navbar';
import Carousel from './carousel';
import Map from './map';
import Popular from './popularExpedition';
import Featured from './featured';

const Home = () => (
  <div>
    <Navbar />
    <Carousel />
    <Map />
    <Popular />
    <Featured />
  </div>
);

export default Home;
