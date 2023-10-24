import React, { Fragment } from "react";
import Summary from "./Summary";
import AvailableMeals from "./AvailableMeals";

const Meal = () => {
  return (
    <Fragment>
      <Summary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meal;
