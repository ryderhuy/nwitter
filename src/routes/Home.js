import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Profile from "./Profile";

const Home = () => (
  <>
    {/* <Switch>
      <Route path="/home">
        <Home />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>
    </Switch> */}
    <span>Home</span>
  </>
);

export default Home;
