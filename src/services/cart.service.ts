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

  static updateItem = (id: number, item: IProduct) => {
    const existingCart: CartType = JSON.parse(
      localStorage.getItem(CART_KEY) || "{}"
    );
    const updatedCart = JSON.stringify({
      ...existingCart,
      [id]: item,
    });
    localStorage.setItem(CART_KEY, updatedCart);
    return true;
  };

  static deleteItem = (id: number, item: IProduct) => {
    const existingCart: CartType = JSON.parse(
      localStorage.getItem(CART_KEY) || "{}"
    );
    delete existingCart[id];
    const updatedCart = JSON.stringify({
      ...existingCart,
    });
    localStorage.setItem(CART_KEY, updatedCart);
    return true;
  };

  static changeQuantity = (id: string, action: "increase" | "decrease") => {
    const existingCart = this.getCart();
    const exitingItem = existingCart?.[id];
    const updatedCart = {
      ...existingCart,
      [id]: { ...existingCart, quantity: existingCart.quantity + 1 },
    };
    localStorage.setItem(CART_KEY, updatedCart);
    return true;
  };
}
