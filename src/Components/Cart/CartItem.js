import React from "react";
import classes from "./CartItem.module.css";
const CartItem = () => {
  return (
    <div className={classes["cart-items"]}>
      <div>
        <p>sushi</p>
        <div className={classes.total}>
          Total Amount<div>$20.00</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>close</button>
        <button className={classes.button}>order</button>
      </div>
    </div>
  );
};

export default CartItem;
