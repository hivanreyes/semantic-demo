import axios from 'axios';
// This is taken from the /config/frontend/ folder using the Webpack resolver.
import { API_HOST } from '../../config/development.json';


function api() {
  return axios.create({
    baseURL: API_HOST,
    timeout: 10000,
    headers: {
      Accept: 'application/json',
    },
  });
}

export default {
  home: {
    getPopularExpeditions: () =>
      api().get('views/expeditions/popular/20'),
    getFeaturedExpedition: () =>
      api().get('/views/expeditions/featured'),
    getObservations: () =>
      api().get('/views/observations/recent/20'),
  },
};
