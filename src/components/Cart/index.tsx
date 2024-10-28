import React from "react";
import illustation from "../../assets/images/illustration-cart.svg";
import { CartItemsService } from "../../services/Cart.service";
const Cart = () => {
  return <div>{JSON.stringify(CartItemsService.getAll())}</div>;
};

export default Cart;
