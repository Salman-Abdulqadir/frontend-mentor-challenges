import React, { ReactNode } from "react";
import { CARD_DETAILS_KEYS } from "../../contexts/utils";
import CreditCard from "../CreditCard";
import ExpiryDateInput from "../common/ExpiryDayInput";
import InputWithLabel from "../common/InputWithLabel";
import { useCardDetails } from "../../contexts/CardDetailsContext";
import useDeviceSize from "../../hooks/useDeviceSize";
import mobileBg from "../../assets/images/bg-main-mobile.png";
import desktopBg from "../../assets/images/bg-main-desktop.png";

const Row: React.FC<{ className?: string; children: ReactNode }> = ({
  children,
  className = "",
}) => {
  return <div className={`w-[400px] ${className}`}>{children}</div>;
};
const Form = () => {
  const isMobile = useDeviceSize();
  const { cardDetails, cardDetailErrors, changeValue } = useCardDetails();
  return (
    <div className="flex">
      <div
        className={`flex bg-no-repeat h-screen items-center ${
          !isMobile && "pl-[200px]"
        }`}
        style={{
          backgroundImage: `url(${isMobile ? mobileBg : desktopBg})`,
        }}
      >
        <CreditCard />
      </div>
      <div className="flex-1 flex flex-col gap-3 items-center justify-center">
        <Row>
          <InputWithLabel
            value={cardDetails.holderName}
            label="CARDHOLDER NAME"
            placeholder="e.g Salman Saleh"
            changeHanlder={(value) =>
              changeValue(CARD_DETAILS_KEYS.holderName, value)
            }
            error={cardDetailErrors.holderName}
          />
        </Row>
        <Row>
          <InputWithLabel
            value={cardDetails.cardNumber}
            label="CARD NUMBER"
            placeholder="e.g 1234 5678 9123 0000"
            maxLength={19}
            changeHanlder={(value) => {
              console.log(value);
              changeValue(CARD_DETAILS_KEYS.cardNumber, value);
            }}
            error={cardDetailErrors.cardNumber}
          />
        </Row>
        <Row className="flex justify-between gap-6">
          <ExpiryDateInput />
          <div className="flex-1">
            <InputWithLabel
              maxLength={3}
              value={cardDetails.cvc}
              label="CVC"
              placeholder="e.g 123"
              changeHanlder={(value) =>
                changeValue(CARD_DETAILS_KEYS.cvc, value)
              }
              error={cardDetailErrors.cvc}
            />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Form;
