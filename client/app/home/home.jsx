import React, { Component } from 'react';
import NavBarWrapper from './navbar';
import Carousel from './carousel';
import Map from './map';
import Popular from './popularExpedition';
import Featured from './featured';
import Initiative from './initiatives';
import Observations from './observations';
import Footer from './footer';
import { Filter } from '../../components';

class Dashboard extends Component {

  componentDidMount() {
    const { actions } = this.props;
    // TODO: Will remove/refactor this to load defaults
    actions.getPopularExpeditions();
    actions.getLatestExpeditions();
    actions.getFeaturedExpedition();
    actions.getObservations();
    actions.getGeoJson();
  }

  render() {
    const {
      popularExpeditions,
      featuredExpedition,
      observations,
      latestExpeditions,
      geoJson,
    } = this.props;
    const popularExpeditionsArray = popularExpeditions.toJS();
    const latestExpeditionsArray = latestExpeditions.toJS();
    const featuredExpeditionObject = featuredExpedition.toJS();
    const observationsArray = observations.toJS();
    const getGeoJsonArray = geoJson.toJS();

    return (
      <div>
        <NavBarWrapper />
        <Carousel />
        <Map data={getGeoJsonArray} />
        <Filter title="Popular Expeditions" />
        <Popular expeditions={popularExpeditionsArray} />
        <Filter title="Latest Expeditions" />
        <Popular expeditions={latestExpeditionsArray} />
        <Featured data={featuredExpeditionObject} />
        <Observations expeditions={observationsArray} />
        <Initiative />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
