import React, { useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Meal from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setViewModal] = useState(false);

  const toggleModalView = () => {
    setViewModal(!showCart);
  };

  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={toggleModalView} />}
      <Header onClickCart={toggleModalView} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
