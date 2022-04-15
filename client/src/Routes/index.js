import React from "react";
import { Switch } from "react-router-dom";
import PropTypes from "prop-types";

import Route from "./Route";
import Home from "../Pages/Home";
import Room from "../Pages/Room";

export default function Routes({ isAuthenticated }) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
      />
      <Route
        exact
        path="/room/:roomId"
        component={Room}
        isAuthenticated={isAuthenticated}
      />
    </Switch>
  );
}

Routes.propTypes = {
  isAuthenticated: PropTypes.bool,
};

Routes.defaultProps = {
  isAuthenticated: false,
};
