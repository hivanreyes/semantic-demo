import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPopularExpeditions } from '../../actions/home';
import Home from './home';


function mapStateToProps(state) {
  return {
    home: state.home,
    popularExpeditions: state.home.get('popularExpeditions'),
  };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    getPopularExpeditions,
  }, dispatch);

  return { actions };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
