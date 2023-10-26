import React, { Fragment } from "react";
import Header from "./Components/Layout/Header/Header";
import Meal from "./Components/Meals/Meal";
import Modal from "./Components/UI/Modal";
import { createPortal } from "react-dom";
import CartItem from "./Components/Cart/CartItem";

function App() {
  return (
    <Fragment>
      {createPortal(
        <Modal>
          <CartItem />
        </Modal>,
        document.getElementById("modal")
      )}
      <Header />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
}

export default App;
