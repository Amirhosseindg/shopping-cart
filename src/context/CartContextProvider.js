import React, { createContext, useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // adding item for the first time
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
      };

    case "REMOVE_ITEM":
      // when it contains one on that item and we want to remove all info of that
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItems],
      };

    case "INCREASE":
      // when we want to increase the quantity of item
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
      };

    case "DECRAESE":
      // when we want to decrease the quantity of item
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: true,
      };

    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
