import { fromJS } from 'immutable';
import {
  HOME,
} from '../constants/actionTypes';

import resolveEach from './reduxResolver';

const initialState = fromJS({
  popularExpeditions: [],
  featuredExpedition: {},
});

function updatePopularExpeditions(state, action) {
  return state.mergeDeep({
    popularExpeditions: action.payload.popularExpeditions,
  });
}

function updateFeaturedExpedition(state, action) {
  return state.mergeDeep({
    featuredExpedition: action.payload.featuredExpedition,
  });
}

export default resolveEach(initialState, {
  [HOME.UPDATE_POPULAR_EXPEDITIONS]: updatePopularExpeditions,
  [HOME.UPDATE_FEATURED_EXPEDITION]: updateFeaturedExpedition,
});
