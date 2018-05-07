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

export function getFeaturedExpedition() {
  return (dispatch) => {
    api.home.getFeaturedExpedition().then((resp) => {
      dispatch({
        type: HOME.UPDATE_FEATURED_EXPEDITION,
        payload: { featuredExpedition: resp.data[Math.floor(Math.random() * resp.data.length)] },
      });
    }).catch(() => {
      dispatch({
        type: HOME.UPDATE_FEATURED_EXPEDITION,
        payload: { featuredExpedition: [] },
      });
    });
  };
}

export default {
  getPopularExpeditions,
  getFeaturedExpedition,
};
