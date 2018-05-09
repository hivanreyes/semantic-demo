import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getPopularExpeditions,
  getLatestExpeditions,
  getFeaturedExpedition,
  getObservations,
  getGeoJson,
} from '../../actions/home';
import Home from './home';


function mapStateToProps(state) {
  return {
    home: state.home,
    popularExpeditions: state.home.get('popularExpeditions'),
    latestExpeditions: state.home.get('latestExpeditions'),
    featuredExpedition: state.home.get('featuredExpedition'),
    observations: state.home.get('observations'),
    geoJson: state.home.get('geoJson'),
  };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    getPopularExpeditions,
    getLatestExpeditions,
    getFeaturedExpedition,
    getObservations,
    getGeoJson,
  }, dispatch);

  return { actions };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
