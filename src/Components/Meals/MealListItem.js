import React from "react";
import classes from "./MealListItem.module.css";
import MealItemForm from "./MealItemForm";

const MealListItem = (props) => {
  return (
    <li>
      <div className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.desc}</div>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
        </div>
        <div>
          <MealItemForm id={props.id} name={props.name} price={props.price} />
        </div>
      </div>
    </li>
  );
};

export default MealListItem;
