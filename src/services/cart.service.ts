import { CartType, IProduct } from "../types";

const CART_KEY = "cart";

export class CartItemsService {
  static getAll = () => {
    const existingCart: CartType = JSON.parse(
      localStorage.getItem(CART_KEY) || "{}"
    );
    return Object.values(existingCart);
  };

  static getCart = () => {
    const existingCart: CartType = JSON.parse(
      localStorage.getItem(CART_KEY) || "{}"
    );
    return existingCart;
  };

  static setCart = (cart: CartType | {}) => {
    const existingCart = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, existingCart);
    return true;
  };

  static addItem = (item: IProduct) => {
    const existingCart = this.getCart();
    console.log("Hello", item.id in existingCart);
    if (item.id in existingCart) return false;
    console.log("I passed mf");
    existingCart[item.id] = { ...item, quantity: 1 };
    this.setCart(existingCart);
    return true;
  };

  static deleteItem = (id: string) => {
    const existingCart = this.getCart();
    delete existingCart[id];
    this.setCart(existingCart);
    return true;
  };

  static increaseQuantity = (id: string) => {
    const existingCart = this.getCart();
    const existingItem = existingCart?.[id];
    const updatedCart: CartType = {
      ...existingCart,
      [id]: { ...existingItem, quantity: existingItem.quantity + 1 },
    };
    this.setCart(updatedCart);
    return true;
  };

  static decreaseQuantity = (id: string) => {
    const existingCart = this.getCart();
    const existingItem = existingCart?.[id];
    if (existingItem.quantity === 1) {
      this.deleteItem(existingItem.id);
      return true;
    }
    const updatedCart: CartType = {
      ...existingCart,
      [id]: { ...existingItem, quantity: existingItem.quantity - 1 },
    };
    this.setCart(updatedCart);
    return true;
  };
}
