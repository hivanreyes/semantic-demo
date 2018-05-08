import React, { Component } from 'react';
import Navbar from './navbar';
import Carousel from './carousel';
import Map from './map';
import Popular from './popularExpedition';
import Featured from './featured';
import Initiative from './initiatives';
import Observations from './observations';

class Dashboard extends Component {

  componentDidMount() {
    const { actions } = this.props;
    // TODO: Will remove/refactor this to load defaults
    actions.getPopularExpeditions();
    actions.getFeaturedExpedition();
    actions.getObservations();
  }

  render() {
    const {
      popularExpeditions,
      featuredExpedition,
      observations,
    } = this.props;
    const popularExpeditionsArray = popularExpeditions.toJS();
    const featuredExpeditionObject = featuredExpedition.toJS();
    const observationsArray = observations.toJS();

    return (
      <div>
        <Navbar />
        <Carousel />
        <Map />
        <Popular expeditions={popularExpeditionsArray} />
        <Featured data={featuredExpeditionObject} />
        <Observations expeditions={observationsArray} />
        <Initiative />
      </div>
    );
  }
}

export default Dashboard;
