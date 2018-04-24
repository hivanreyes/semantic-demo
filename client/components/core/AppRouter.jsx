import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hello from '../Hello';

/**
 * Exposes Application routes using react-router-dom
 * @see https://reacttraining.com/react-router/web/guides/quick-start
 */
const AppRouter = () => (
  <BrowserRouter>
    <Route path="/" component={Hello} />
  </BrowserRouter>
);

export default AppRouter;
