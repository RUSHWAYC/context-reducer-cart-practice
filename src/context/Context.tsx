import { createContext, ReactNode, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducers";
import { CartContextType } from "./types";

const Cart = createContext<CartContextType>({
  state: { products: [], cart: [] },
  dispatch: () => {},
});

faker.seed(100);

interface ContextProps {
  children: ReactNode;
}

const Context = ({ children }: ContextProps) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(100, 200, 0),
    image: faker.image.imageUrl(640, 480, `${faker.commerce.product()}`),
    inStock: faker.random.numeric(1, {
      allowLeadingZeros: true,
      bannedDigits: ["1", "2", "4", "7", "8", "9"],
    }),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.numeric(1, {
      bannedDigits: ["0", "6", "7", "8", "9"],
    }),
    qty: 1,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = (): CartContextType => {
  return useContext(Cart);
};

export default Context;
