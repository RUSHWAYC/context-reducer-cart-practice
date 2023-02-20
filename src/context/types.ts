export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  inStock: string;
  fastDelivery: boolean;
  ratings: string;
  qty: number;
}

export interface CartState {
  products: Product[];
  cart: Product[];
}

export interface CartAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CHANGE_CART_QTY";
  payload: Product;
}

export interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}
