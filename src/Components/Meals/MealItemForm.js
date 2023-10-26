import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const onAmountChange = (event) => {
    console.log(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("add to cart", props.id);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        type="number"
        label="Amount"
        id="qty"
        value="1"
        onChange={onAmountChange}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
