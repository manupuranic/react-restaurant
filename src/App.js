import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Meal from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";

function App() {
  const [showCart, setViewModal] = useState(false);

  const toggleModalView = () => {
    setViewModal(!showCart);
  };

  return (
    <Fragment>
      {showCart && <Cart onCloseCart={toggleModalView} />}
      <Header onClickCart={toggleModalView} />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
}

export default App;
