import { CartState, CartAction } from "./types";

export const cartReducer = (state: CartState, action: CartAction) => {
  const addToCartAction = action as CartAction;
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...addToCartAction.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== addToCartAction.payload.id),
      };
    default:
      return state;
  }
};
