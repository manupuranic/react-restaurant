import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;
    if (existingItemIndex >= 0) {
      updatedItems = [...state.items];
      updatedItems[existingItemIndex].amount += action.item.amount;
    } else {
      updatedItems = [...state.items, action.item];
    }
    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  } else if (action.type === "REMOVE_FROM_CART") {
    const toDeleteItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedTotalItem =
      state.totalAmount - state.items[toDeleteItemIndex].price;
    let updatedItems;
    if (state.items[toDeleteItemIndex].amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItems = [...state.items];
      updatedItems[toDeleteItemIndex].amount -= 1;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalItem,
    };
  } else if (action.type === "CLEAR_CART") {
    return {
      items: [],
      totalAmount: 0,
    };
  } else {
    return {
      items: state.items,
      totalAmount: state.totalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD_TO_CART", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE_FROM_CART", id: id });
  };

  const clearCart = () => {
    dispatchCart({ type: "CLEAR_CART" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart: clearCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
