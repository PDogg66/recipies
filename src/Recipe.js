import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./Product";
import App from "./App";
const Recipe = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Link to={`/products/${props.tag}/${props.title}`}>
        <img src={props.image} alt="" />
      </Link>
    </div>
  );
};
export default Recipe;
