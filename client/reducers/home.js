import { fromJS } from 'immutable';
import {
  HOME,
} from '../constants/actionTypes';

import resolveEach from './reduxResolver';

const initialState = fromJS({
  popularExpeditions: [],
  latestExpeditions: [],
  featuredExpedition: {},
  observations: [],
  geoJson: [],
});

function updatePopularExpeditions(state, action) {
  return state.mergeDeep({
    popularExpeditions: action.payload.popularExpeditions,
  });
}

function updateLatestExpeditions(state, action) {
  return state.mergeDeep({
    latestExpeditions: action.payload.latestExpeditions,
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
function updateGeoJson(state, action) {
  return state.mergeDeep({
    geoJson: action.payload.geoJson,
  });
}

export default resolveEach(initialState, {
  [HOME.UPDATE_POPULAR_EXPEDITIONS]: updatePopularExpeditions,
  [HOME.UPDATE_LATEST_EXPEDITIONS]: updateLatestExpeditions,
  [HOME.UPDATE_FEATURED_EXPEDITION]: updateFeaturedExpedition,
  [HOME.UPDATE_OBSERVATIONS]: updateObservations,
  [HOME.UPDATE_GEOJSON]: updateGeoJson,
});
