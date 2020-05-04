import React from "react";

const Title = (props) => {
  if (props.value === "") {
    return <h1>Some common Chicken's recipes</h1>;
  } else {
    return <h1>Top common recipies of {props.value}</h1>;
  }
};

export default Title;
