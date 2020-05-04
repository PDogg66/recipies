import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./home";
import Recipe from "./Recipe";
import "./Product.css";
import toplogo from "./Components/toplogo.png";
import ytbicon from "./Components/ytbicon.png";
import faceicon from "./Components/faceicon.png";
const Product = ({ match }) => {
  const APP_ID = "c2b98cb7";
  const APP_KEY = "f0869bf01680a8472affea83a20507fa";
  const [item, setItem] = useState([]);

  useEffect(() => {
    console.log(match);
    getItem();
  }, []);
  const key0 = match.params.name.toString();
  let name0 = match.params.label.toString();
  console.log(`name0 ${name0} `);

  const getItem = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${key0}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setItem(data.hits);
    console.log(data.hits);
  };
  return (
    <div>
      {item.map((item) => {
        if (item.recipe.label === name0) {
          name0 = "";
          console.log(`hello ${item.recipe.label}`);
          return (
            <div className="container-page2">
              <div className="top-page2">
                <div className="logo">
                  <img src={toplogo} />
                </div>
                <div className="home-button">
                  <Link to="/">Home</Link>
                </div>
                <div className="social-icon">
                  <img src={ytbicon} />
                  <img src={faceicon} />
                </div>
              </div>
              <div className="title-page2">
                <h1>Ingredient to make {item.recipe.label}</h1>
              </div>
              <div className="main-page2">
                <div className="main-content">
                  <ol>
                    {item.recipe.ingredients.map((ingredient) => (
                      <li>{ingredient.text}</li>
                    ))}
                  </ol>
                </div>

                <div className="image-container">
                  <img src={item.recipe.image} />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Product;
