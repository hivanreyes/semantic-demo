import { fromJS } from 'immutable';
import {
  HOME,
} from '../constants/actionTypes';

import resolveEach from './reduxResolver';

const initialState = fromJS({
  popularExpeditions: [],
  featuredExpedition: {},
  observations: [],
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

function updateObservations(state, action) {
  return state.mergeDeep({
    observations: action.payload.observations,
  });
}

export default resolveEach(initialState, {
  [HOME.UPDATE_POPULAR_EXPEDITIONS]: updatePopularExpeditions,
  [HOME.UPDATE_FEATURED_EXPEDITION]: updateFeaturedExpedition,
  [HOME.UPDATE_OBSERVATIONS]: updateObservations,
});
