import React from "react";
import { Product } from "../context/types";

interface SingleProductProps {
  prod: Product;
}

const SingleProduct = ({ prod }: SingleProductProps) => {
  return (
    <div>
      <div>{prod.name}</div>
    </div>
  );
};

export default SingleProduct;
