import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home/home';

/**
 * Exposes Application routes using react-router-dom
 * @see https://reacttraining.com/react-router/web/guides/quick-start
 */
const AppRouter = () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
);

export default AppRouter;
