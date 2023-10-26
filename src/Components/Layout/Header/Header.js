import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImg from "../../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.nav}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onClickCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
