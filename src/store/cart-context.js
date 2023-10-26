import React from "react";

const CartContext = React.createContext({
  items: [{ name: "", id: "", price: "", amount: 0 }],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
