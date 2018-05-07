import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from './home/homeContainer';

/**
 * Exposes Application routes using react-router-dom
 * @see https://reacttraining.com/react-router/web/guides/quick-start
 */
const AppRouter = () => (
  <BrowserRouter>
    <Route path="/" component={HomeContainer} />
  </BrowserRouter>
);

export default AppRouter;
