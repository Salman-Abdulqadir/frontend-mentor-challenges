import { createContext, ReactNode, useMemo, useState } from "react";
import { CartItemsService } from "../services/cart.service";

export const CartContext = createContext<any>({});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState(CartItemsService.getCart());
  const [cartItems, setCartItems] = useState(CartItemsService.getAll());
  const [modalOpen, setModalOpen] = useState(false);
  const refreshCart = () => {
    setCart(CartItemsService.getCart());
    setCartItems(CartItemsService.getAll());
  };
  const orderTotal = useMemo(() => {
    return (
      cartItems?.reduce(
        (result, item) => (result += item.quantity * item.price),
        0
      ) || 0
    );
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartItems,
        setCartItems,
        refreshCart,
        orderTotal,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
