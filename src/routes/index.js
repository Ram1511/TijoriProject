import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './public.route';
import RoutesConfig from './route.config';

const NotFound = () => {
  return (
    <div className="not-found">
      <h4>Page Not Found</h4>
    </div>
  );
};

const AppRoutes = (props) => {
  return (
    <Routes>
      {(RoutesConfig || []).map((routeProps) => {
        return (
          <Route key={routeProps.path} element={<PublicRoute />}>
            <Route {...routeProps} />
          </Route>
        );
      })}
      <Route element={NotFound} />
    </Routes>
  );
};

export default AppRoutes;
