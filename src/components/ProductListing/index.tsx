import React, { memo, useEffect, useMemo, useState } from "react";
import { products as DATA } from "../../assets/data/products";
import ProductCard from "./widgets/ProductCard";
import { CartItemsService } from "../../services/Cart.service";
import { IProduct } from "../../types";

const ProductListing = () => {
  const cartData = CartItemsService.getCart();
  const products: IProduct[] = useMemo(() => {
    console.log("I am rendering fam...l");
    return DATA.map((item) => {
      const tempItem = { ...item };
      tempItem.quantity = Object.keys(cartData)?.includes(item.id)
        ? cartData?.[item.id].quantity
        : 0;
      return tempItem;
    });
  }, [cartData]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
};

export default ProductListing;
