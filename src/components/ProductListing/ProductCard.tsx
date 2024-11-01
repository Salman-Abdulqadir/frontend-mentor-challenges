import { IProduct } from "../../types";
import addToCartIconSrc from "../../assets/images/icon-add-to-cart.svg";
import plusIconSrc from "../../assets/images/icon-increment-quantity.svg";
import minusIconSrc from "../../assets/images/icon-decrement-quantity.svg";

interface ProductCardProps {
  product: IProduct;
  onAdd: () => void;
  onIncreaseOrDecrease: (action: "increase" | "decrease") => void;
  onDelete: () => void;
}
const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAdd,
  onIncreaseOrDecrease,
  onDelete,
}) => {
  const { image, name, category, price, quantity } = product;
  return (
    <div className="w-fit">
      <div className="flex flex-col">
        <img
          src={image.desktop}
          alt={name}
          className={`h-[250px] w-[250px] rounded-md border-2 ${
            quantity !== 0 ? "border-custom-red" : "border-transparent"
          }`}
        />
        {quantity === 0 ? (
          <button
            onClick={onAdd}
            className="w-[150px] m-auto bg-white flex align-center gap-2 border-[1px] border-rose-300 px-4 py-2 rounded-full -translate-y-1/2"
          >
            <img src={addToCartIconSrc} alt="Add to cart" />
            <span>Add to cart</span>
          </button>
        ) : (
          <div className="w-[150px] m-auto bg-custom-red border-[1px] border-transparent flex items-center justify-between px-4 py-2 rounded-full -translate-y-1/2 text-white">
            <button
              className="w-[18px] h-[18px] rounded-full border-[1px] border-white"
              onClick={() => onIncreaseOrDecrease("decrease")}
            >
              <img className="m-auto" src={minusIconSrc} alt="Minus icon" />
            </button>
            <span>{quantity}</span>
            <button
              className="w-[18px] h-[18px] rounded-full border-[1px] border-white"
              onClick={() => onIncreaseOrDecrease("increase")}
            >
              <img className="m-auto" src={plusIconSrc} alt="Plus icon" />
            </button>
          </div>
        )}
      </div>
      <div className="space-y-1 -translate-y-[10px]">
        <div className="text-sm text-rose-300">{category}</div>
        <div className="font-bold text-rose-900">{name}</div>
        <div className="font-bold text-custom-red">${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
