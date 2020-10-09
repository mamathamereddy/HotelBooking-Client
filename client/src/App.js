import React from "react";
import "./App.css";
import Home from "./containers /Home";
import Rooms from "./containers /Rooms";
import SingleRoom from "./containers /SingleRoom";
import Error from "./containers /Error";

import Navbar from "./components /Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App