import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import formScreen from "./screens/FormScreen/formScreen";
import Dashboard from "./screens/Dashboard/dashboard";
import SuccessfulAuth from "./utils/SuccessfulAuth";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route exact path="/form" component={formScreen} />
          <Route
            exact
            path="/googlesuccessfulAuth"
            component={SuccessfulAuth}
          />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
