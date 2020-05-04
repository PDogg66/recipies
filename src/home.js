import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Recipe from "./Recipe";
import Title from "./title";
import searchicon from "./Components/searchicon.png";
import brandlogo from "./Components/brandlogo.png";
import toplogo from "./Components/toplogo.png";
import Product from "./Product";
const Home = () => {
  const APP_ID = "c2b98cb7";
  const APP_KEY = "f0869bf01680a8472affea83a20507fa";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
    console.log("what yp");
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits.slice(0, 8));
    console.log(data.hits.slice(0, 8));
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <div className="Top">
        <form onSubmit={getSearch} className="search-form">
          <img src={toplogo} />
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            <img src={searchicon} />
          </button>
        </form>
      </div>
      <div className="main">
        <div className="main-title">
          <Title value={query} />
        </div>
        <div className="main-container">
          {recipes.map((recipe) => (
            <Recipe
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              tag={query}
              // ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
      <div className="bot">
        <div className="brandlogo">
          <img src={brandlogo} />
        </div>
        <div class="info1">
          <h1>Information</h1>
          <ul>
            <li>About us</li>
            <li>More Search</li>
            <li>Blog</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="info2">
          <h1>Helpful Links</h1>
          <ul>
            <li>Services</li>
            <li>Support</li>
            <li>Terms & Condition</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
