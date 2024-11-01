import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import confirmedIconSrc from "../../assets/images/icon-order-confirmed.svg";
import { IProduct } from "../../types";
import { CartItemsService } from "../../services/cart.service";

const ConfirmationModal = () => {
  const { cartItems, refreshCart, orderTotal, modalOpen, setModalOpen } =
    useContext(CartContext);

  const onConfirm = () => {
    CartItemsService.setCart({});
    refreshCart();
    setModalOpen(false);
  };
  return (
    <dialog className="modal" open={modalOpen}>
      <div className="modal-box space-y-3 w-full md:w-[60vh]">
        <img src={confirmedIconSrc} alt="Confirmed order logo" />
        <h2 className="font-bold text-2xl">Order Confirmed</h2>
        <p className="text-rose-500">We hope you enjoy your food</p>
        <div className="space-y-4 bg-rose-50 p-4 rounded-md">
          {cartItems?.map((item: IProduct) => (
            <div className="border-b-[1px] pb-3 flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  src={item.image.thumbnail}
                  alt={`Thumbnail image of ${item.name}`}
                  className="w-[60px] h-[60px]"
                />
                <div>
                  <span>{item.name}</span>
                  <div className="space-x-3">
                    <span className="text-custom-red">{item.quantity}X</span>
                    <span className="text-rose-300">@ ${item.price}X</span>
                  </div>
                </div>
              </div>
              <div className="text-xl">${item.price * item.quantity} </div>
            </div>
          ))}
          <div className="flex items-center justify-between">
            <span>Order Total</span>
            <span className="text-3xl font-bold">${orderTotal}</span>
          </div>
        </div>
        <button
          className="bg-custom-red text-white py-2 rounded-full w-full"
          onClick={onConfirm}
        >
          Start New Order
        </button>
      </div>
    </dialog>
  );
};

export default ConfirmationModal;
