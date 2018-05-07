import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getPopularExpeditions,
  getFeaturedExpedition,
} from '../../actions/home';
import Home from './home';


function mapStateToProps(state) {
  return {
    home: state.home,
    popularExpeditions: state.home.get('popularExpeditions'),
    featuredExpedition: state.home.get('featuredExpedition'),
  };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    getPopularExpeditions,
    getFeaturedExpedition,
  }, dispatch);

  return { actions };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
