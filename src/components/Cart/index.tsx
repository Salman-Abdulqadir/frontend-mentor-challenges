import { useContext, useMemo } from "react";
import { CartContext } from "../../contexts/cart.context";
import { IProduct } from "../../types";
import { CartItemsService } from "../../services/cart.service";

import emptyCartImgSrc from "../../assets/images/illustration-empty-cart.svg";
import removeItemImgSrc from "../../assets/images/icon-remove-item.svg";
import carbonImgSrc from "../../assets/images/icon-carbon-neutral.svg";

const Cart = () => {
  const { cartItems, refreshCart, orderTotal, setModalOpen } =
    useContext(CartContext);
  const onDelete = (id: string) => {
    CartItemsService.deleteItem(id);
    refreshCart();
  };
  const itemCount = useMemo(() => {
    return (
      cartItems?.reduce(
        (result: number, item: IProduct) => (result += item.quantity),
        0
      ) || 0
    );
  }, [cartItems]);

  const OrderTotal = () => (
    <>
      <div className="flex items-center justify-between px-4">
        <span>Order total</span>
        <span className="text-2xl font-bold">${orderTotal}</span>
      </div>
      <div className="mx-4 flex items-center justify-center gap-2 bg-rose-50 rounded-md p-4">
        <img src={carbonImgSrc} alt="carbon Emission" />
        <div>
          This is a <span className="font-bold">carbon-neutral</span> delivery
        </div>
      </div>
      <button
        className="mx-4 bg-custom-red text-white py-2 rounded-full"
        onClick={() => setModalOpen(true)}
      >
        Confirm order
      </button>
    </>
  );
  return (
    <div className="py-4 rounded-md bg-white flex flex-col gap-4 max-h-full max-w-[350px]">
      <div className="text-custom-red font-bold text-xl px-4">
        Your Cart ({itemCount})
      </div>
      <div className="space-y-4 flex-1 overflow-scroll">
        {cartItems?.length ? (
          <div className="px-4">
            {cartItems?.map((item: IProduct) => (
              <div
                key={`cart-${item.id}`}
                className="flex items-center justify-between border-b-[1px] border-rose-100 pb-4"
              >
                <div>
                  <div className="font-bold">{item.name}</div>
                  <div className="space-x-2">
                    <span className="text-custom-red">{item.quantity}X</span>{" "}
                    <span className="text-rose-300">@ ${item.price}</span>
                    <span className="text-rose-500">
                      $ {item.price * item.quantity}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onDelete(item.id)}
                  className="w-[18px] h-[18px] rounded-full border-[1px] border-rose-800"
                >
                  <img
                    src={removeItemImgSrc}
                    alt="Remove Item"
                    className="m-auto"
                  />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <img src={emptyCartImgSrc} alt="Empty Cart" className="m-auto" />
            <div className="text-rose-500">
              Your added items will appear here
            </div>
          </div>
        )}
      </div>
      {orderTotal !== 0 && <OrderTotal />}
    </div>
  );
};

export default Cart;
