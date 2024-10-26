export const currency = "$";
export enum MORTGAGE_TYPES {
  REPAYMENT = "Repayment",
  INTEREST_ONLY = "Interest Only",
}

export const formKeys = {
  mortgageAmount: "mortgageAmount",
  interestRate: "interestRate",
  mortgageTerm: "mortgageTerm",
  mortgageType: "mortgageType",
};
export const initialFormValues = {
  mortgageAmount: "",
  interestRate: "",
  mortgageTerm: "",
  mortgageType: "",
};

export const initialFormErrors = Object.assign({}, initialFormValues);
export const fieldValidatorByKey: { [keys: string]: any } = {
  mortgageAmount: (value: string) => {
    if (value && !/^[\d.]+$/.test(value)) {
      return "Invalid Mortgage Amount.";
    } else if (!value) return "Field is required!";
    return "";
  },
  interestRate: (value: string) => {
    const rate = parseFloat(value);
    if (value && (!/^[\d.]+$/.test(value) || rate > 100 || rate < 1)) {
      return "Invalid Interest Rate.";
    } else if (!value) return "Field is required!";
    return "";
  },
  mortgageTerm: (value: string) => {
    const term = parseInt(value);
    if (value && (!/^\d+$/.test(value) || term < 1)) {
      return "Invalid Mortgage Term";
    } else if (!value) {
      return "Field is required!";
    }
  },
  mortgageType: (value: string) => {
    if (!value) return "Field is required";
  },
};

export const mortgageTypeOptions = Object.values(MORTGAGE_TYPES);
export const initialResults = {
  monthly: "",
  total: "",
  monthlyInterest: "",
  totalInterest: "",
};

const formatNumber = (num: number) =>
  num?.toFixed(2)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const calculatePayment = (formValues: typeof initialFormValues) => {
  /**
  The monthly mortgage payment formula determines how much you need to pay each month to fully repay a loan, including both principal and interest, over a set period.

  Loan Principal: The total amount borrowed (e.g., $300,000).
  Monthly Interest Rate: The annual interest rate divided by 12 (e.g., 5.25% becomes 0.4375% monthly).
  Total Payments: The number of monthly payments over the loan term (e.g., 25 years is 300 payments).
  The formula combines these values to ensure each monthly payment covers the interest and reduces the loan principal steadily, resulting in a fixed payment amount for the entire term.

  R = monthly interest rate
  N = number of payments
  P = total loan
  if mortgage type is interest only => M=P×r
 */

  const { mortgageAmount, mortgageTerm, interestRate, mortgageType } =
    formValues;
  const r = parseFloat(interestRate) / (100 * 12);
  const n = parseInt(mortgageTerm) * 12;
  let monthlyPayments: number;
  if (mortgageType === MORTGAGE_TYPES.REPAYMENT) {
    monthlyPayments =
      parseFloat(mortgageAmount) *
      ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  } else {
    monthlyPayments = parseFloat(mortgageAmount) * r;
  }
  const monthlyInterest = monthlyPayments - parseFloat(mortgageAmount) / n;
  return {
    monthlyInterest: formatNumber(monthlyInterest),
    totalInterest: formatNumber(monthlyInterest * n),
    monthly: formatNumber(monthlyPayments),
    total: formatNumber(monthlyPayments * n),
  };
};
