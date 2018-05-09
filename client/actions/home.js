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

export function getLatestExpeditions() {
  return (dispatch) => {
    api.home.getLatestExpeditions().then((resp) => {
      dispatch({
        type: HOME.UPDATE_LATEST_EXPEDITIONS,
        payload: { latestExpeditions: resp.data },
      });
    }).catch(() => {
      dispatch({
        type: HOME.UPDATE_LATEST_EXPEDITIONS,
        payload: { latestExpeditions: [] },
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

export function getObservations() {
  return (dispatch) => {
    api.home.getObservations().then((resp) => {
      dispatch({
        type: HOME.UPDATE_OBSERVATIONS,
        payload: { observations: resp.data },
      });
    }).catch(() => {
      dispatch({
        type: HOME.UPDATE_OBSERVATIONS,
        payload: { observations: [] },
      });
    });
  };
}

export function getGeoJson() {
  return (dispatch) => {
    api.home.getGeoJson().then((resp) => {
      dispatch({
        type: HOME.UPDATE_GEOJSON,
        payload: { geoJson: resp.data },
      });
    }).catch(() => {
      dispatch({
        type: HOME.UPDATE_GEOJSON,
        payload: { geoJson: [] },
      });
    });
  };
}

export default {
  getPopularExpeditions,
  getFeaturedExpedition,
  getObservations,
  getGeoJson,
};
