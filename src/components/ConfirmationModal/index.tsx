import { useContext, useEffect } from "react";
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === `Escape` && modalOpen) {
        setModalOpen(false);
      }
    };
    window.addEventListener("keydown", (e) => handleEscape(e));
    return () => window.removeEventListener("keydown", (e) => handleEscape(e));
  }, []);
  return (
    <dialog className="modal bg-black bg-opacity-40" open={modalOpen}>
      <div className="modal-box flex flex-col gap-3 w-full h-[500px] md:w-[60vh]">
        <img
          src={confirmedIconSrc}
          className="w-fit h-fit"
          alt="Confirmed order logo"
        />
        <h2 className="font-bold text-2xl">Order Confirmed</h2>
        <p className="text-rose-500">We hope you enjoy your food</p>
        <div className="space-y-4 bg-rose-50 p-4 rounded-md flex-1">
          {cartItems?.map((item: IProduct) => (
            <div
              className="border-b-[1px] pb-3 flex items-center justify-between"
              key={`CART_CONFIRMATION_PRODUCT_${item?.id}`}
            >
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
