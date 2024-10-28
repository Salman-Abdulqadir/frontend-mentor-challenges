import React from "react";
import { IProduct } from "../../../types/products.types";
const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div onClick={}>
      <img src={image.desktop} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
