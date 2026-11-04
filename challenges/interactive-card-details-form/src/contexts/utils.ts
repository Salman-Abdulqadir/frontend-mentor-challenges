export function formatCreditCardNumber(input: string): string {
  let formattedString = "";
  for (let i = 0; i < input.length; i++) {
    formattedString += input.charAt(i);
    if ((i + 1) % 4 === 0) formattedString += " ";
  }
  return formattedString;
}

export interface ICardDetails {
  holderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}

export interface ICardDetailErrors {
  holderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}

export type CardDetailsContextType = {
  cardDetails: ICardDetails;
  cardDetailErrors: ICardDetailErrors;
  changeValue: (key: string, value: any) => void;
};

export const CARD_DETAILS_KEYS = {
  holderName: "holderName",
  cardNumber: "cardNumber",
  expiryMonth: "expiryMonth",
  expiryYear: "expiryYear",
  cvc: "cvc",
};
export const initialCardDetails = {
  holderName: "",
  cardNumber: "",
  expiryMonth: "",
  expiryYear: "",
  cvc: "",
};

export const initialCardDetailErrors = Object.keys(initialCardDetails).reduce(
  (acc, curr) => {
    acc[curr] = "";
    return acc;
  },
  {} as any
);

export const ERROR_MESSAGES = {
  empty: "Can't be blank",
  wrongFormat: "Wrong tormat numbers only",
};
