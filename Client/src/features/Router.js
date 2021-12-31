/* eslint-disable */
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import UserChoice from "./../pages/UserChoice";
import AllSet from "./../pages/AllSet";
import WelcomePage from "./../pages/WelcomePage";
import DashBoard from "../pages/Dashboard/dashboard";


const Router = ({
  name,
  setName,
  triggerApi,
  userOptions,
  setUserOptions,
  news,
  country,
  location,
}) => {
  return (
   
      <Switch>
        <Route exact path="/">
          <WelcomePage name={name} setName={setName} />
        </Route>
        <Route path="/pages/UserChoice.js">
          <UserChoice
            name={name}
            userOptions={userOptions}
            setUserOptions={setUserOptions}
            triggerApi={triggerApi}
            news={news}
          />
        </Route>
        <Route path="/pages/AllSet.js">
          <AllSet />
        </Route>
        <Route path="/pages/DashBoard.js">
          <DashBoard
            setName={setName}
            name={name}
            userOptions={userOptions}
            location={location}
            country={country}
          />
        </Route>
      </Switch>

   
  );
};

export default Router;
