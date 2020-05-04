import React, { useState, useEffect } from "react";
import Home from "./home";
import Product from "./Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/:name/:label" exact component={Product} />
      </Switch>
    </Router>
  );
};
export default App;
