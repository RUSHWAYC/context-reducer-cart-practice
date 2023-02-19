import React from "react";
import { Button, Card } from "react-bootstrap";
import { Product } from "../context/types";
import Rating from "./Rating";

interface SingleProductProps {
  prod: Product;
}

const SingleProduct = ({ prod }: SingleProductProps) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {prod.price}</span>
            {prod.fastDelivery ? (
              <div>Fast Delviery</div>
            ) : (
              <div>4 days delviery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          <Button variant="danger">Remove from Cart</Button>
          <Button disabled={prod.inStock === "0"}>
            {prod.inStock === "0" ? "Out of Stock" : "Add to Cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
