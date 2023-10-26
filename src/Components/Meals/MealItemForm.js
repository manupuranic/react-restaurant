import React, { useContext, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import CartContext from "../../store/cart-context";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const cartCtx = useContext(CartContext);

  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: parseInt(amount),
    });
    setAmount(1);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        input={{
          type: "number",
          id: "qty",
          min: "1",
          max: "5",
          step: "1",
          value: amount,
          onChange: onAmountChange,
        }}
        label="Amount"
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
