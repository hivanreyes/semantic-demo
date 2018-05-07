import { HOME } from '../constants/actionTypes';
import api from '../api/api';

export function getPopularExpeditions() {
  return (dispatch) => {
    api.home.getPopularExpeditions().then((resp) => {
      dispatch({
        type: HOME.UPDATE_POPULAR_EXPEDITIONS,
        payload: { popularExpeditions: resp.data },
      });
    }).catch(() => {
      dispatch({
        type: HOME.UPDATE_POPULAR_EXPEDITIONS,
        payload: { popularExpeditions: [] },
      });
    });
  };
}

export default {
  getPopularExpeditions,
};
