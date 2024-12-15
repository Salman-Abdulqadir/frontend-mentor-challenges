import { useCardDetails } from "../../contexts/CardDetailsContext";
import { CARD_DETAILS_KEYS } from "../../contexts/utils";

const ExpiryDateInput = () => {
  const { cardDetails, cardDetailErrors, changeValue } = useCardDetails();
  return (
    <div className="flex flex-col gap-2 flex-1">
      <span className="text-lg text-greyish-violet-3 font-semibold">
        {"EXP. DATE (MM/YY)"}
      </span>
      <div className="flex gap-2">
        <input
          type="text"
          maxLength={2}
          placeholder={"MM"}
          value={cardDetails.expiryMonth}
          onChange={(e) =>
            changeValue(CARD_DETAILS_KEYS.expiryMonth, e.target.value)
          }
          className={`cursor-pointer rounded-lg text-lg text-greyish-violet-3 font-semibold px-3 py-2 border-[1px] ${
            cardDetailErrors.expiryMonth
              ? "border-error-red"
              : "border-greyish-violet-1"
          } hover:border-greyish-violet-2`}
        />
        <input
          type="text"
          maxLength={2}
          placeholder={"YY"}
          value={cardDetails.expiryYear}
          onChange={(e) =>
            changeValue(CARD_DETAILS_KEYS.expiryYear, e.target.value)
          }
          className={`cursor-pointer rounded-lg text-lg text-greyish-violet-3 font-semibold px-3 py-2 border-[1px] ${
            cardDetailErrors.expiryYear
              ? "border-error-red"
              : "border-greyish-violet-1"
          } hover:border-greyish-violet-2`}
        />
      </div>
      <span className="text-error-red">
        {cardDetailErrors.expiryMonth || cardDetailErrors.expiryYear}
      </span>
    </div>
  );
};

export default ExpiryDateInput;
