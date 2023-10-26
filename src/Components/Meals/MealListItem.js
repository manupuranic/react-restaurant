import React from "react";
import classes from "./MealListItem.module.css";

const MealListItem = (props) => {
  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <span className={classes.description}>{props.desc}</span>
        <span className={classes.price}>${props.price}</span>
      </div>
    </li>
  );
};

export default MealListItem;
