import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const CartItem = (props) => {
  const cartItems = [
    { id: "c1", name: "sushi", amount: "2", price: "20.00" },
  ].map((item) => <li>{item.name}</li>);
  return (
    <Modal onClose={props.onCloseCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.32</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCloseCart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default CartItem;
