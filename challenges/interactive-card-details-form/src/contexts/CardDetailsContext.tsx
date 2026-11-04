import { FC, ReactNode, createContext, useContext, useState } from "react";

import {
  CardDetailsContextType,
  ICardDetails,
  initialCardDetails,
  ICardDetailErrors,
  initialCardDetailErrors,
  CARD_DETAILS_KEYS,
  ERROR_MESSAGES,
  formatCreditCardNumber,
} from "./utils";

const CardDetailsContext = createContext<CardDetailsContextType>({} as any);

export const useCardDetails = () => {
  return useContext(CardDetailsContext);
};

export const CardDetailsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cardDetails, setCardDetails] =
    useState<ICardDetails>(initialCardDetails);
  const [cardDetailErrors, setCardDetailErrors] = useState<ICardDetailErrors>(
    initialCardDetailErrors
  );
  const changeValue = (key: string, value: any) => {
    let error = "";
    if (!value) error = ERROR_MESSAGES.empty;
    else if (
      (key !== CARD_DETAILS_KEYS.holderName &&
        !/^\d+$/.test(value?.replace(" ", "").trim())) ||
      (key === CARD_DETAILS_KEYS.expiryMonth && value > 12)
    ) {
      error = ERROR_MESSAGES.wrongFormat;
    }
    setCardDetailErrors((previousState) => ({
      ...previousState,
      [key]: error,
    }));
    setCardDetails((previousState) => ({
      ...previousState,
      [key]:
        key === CARD_DETAILS_KEYS.holderName
          ? value
          : formatCreditCardNumber(value.replace(" ", "").trim()),
    }));
  };
  return (
    <CardDetailsContext.Provider
      value={{ cardDetails, cardDetailErrors, changeValue }}
    >
      {children}
    </CardDetailsContext.Provider>
  );
};
