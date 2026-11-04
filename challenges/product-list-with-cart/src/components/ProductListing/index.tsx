import { useContext, useMemo } from "react";
import { products as DATA } from "../../assets/data/products";
import ProductCard from "./ProductCard";
import { CartItemsService } from "../../services/cart.service";
import { IProduct } from "../../types";
import { CartContext } from "../../contexts/cart.context";

const ProductListing = () => {
  const { cart, refreshCart } = useContext(CartContext);
  const onAdd = (product: IProduct) => {
    CartItemsService.addItem(product);
    refreshCart();
  };
  const onDelete = (id: string) => {
    CartItemsService.deleteItem(id);
    refreshCart();
  };
  const onIncreaseOrDecrease = (
    id: string,
    action: "increase" | "decrease"
  ) => {
    if (action === "increase") CartItemsService.increaseQuantity(id);
    else CartItemsService.decreaseQuantity(id);
    refreshCart();
  };
  const products: IProduct[] = useMemo(() => {
    return DATA.map((item) => {
      const tempItem = { ...item };
      tempItem.quantity = Object.keys(cart)?.includes(item.id)
        ? cart?.[item.id].quantity
        : 0;
      return tempItem;
    });
  }, [cart]);
  return (
    <div className="flex flex-col h-full gap-3">
      <h1 className="font-bold text-4xl">Desserts</h1>
      <div className="flex-1 overflow-scroll pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            onAdd={() => onAdd(product)}
            onDelete={() => onDelete(product.id)}
            onIncreaseOrDecrease={(action) => {
              onIncreaseOrDecrease(product.id, action);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
