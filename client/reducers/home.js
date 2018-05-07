import { fromJS } from 'immutable';
import {
  HOME,
} from '../constants/actionTypes';

import resolveEach from './reduxResolver';

const initialState = fromJS({
  popularExpeditions: [],
});

function updatePopularExpeditions(state, action) {
  return state.mergeDeep({
    popularExpeditions: action.payload.popularExpeditions,
  });
}

export default resolveEach(initialState, {
  [HOME.UPDATE_POPULAR_EXPEDITIONS]: updatePopularExpeditions,
});
