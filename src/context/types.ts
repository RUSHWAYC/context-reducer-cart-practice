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

//If these are not "any" all hell breaks loose in Context.tsx
export interface FilterState {
  sort: any;
  byStock: boolean;
  byFastDelivery: boolean;
  byRating: any;
  searchQuery: any;
}

//If payload is not optional and | string the app breaks.
export interface FilterAction {
  type:
    | "SORT_BY_PRICE"
    | "FILTER_BY_STOCK"
    | "FILTER_BY_DELIVERY"
    | "FILTER_BY_RATING"
    | "FILTER_BY_SEARCH"
    | "CLEAR_FILTERS";
  payload?: FilterState | string;
}

export interface FilterContextType {
  state: FilterState;
  dispatch: React.Dispatch<FilterAction>;
}
