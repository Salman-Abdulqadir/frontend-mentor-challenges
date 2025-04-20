import { ButtonHTMLAttributes, ReactNode, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  children: ReactNode | string;
  loading?: boolean;
};
const Button: FC<ButtonProps> = (props) => {
  let className =
    "flex gap-2 items-center justify-center py-2 px-4 text-white font-medium rounded-lg transition-all duration-300 ease-in-out cursor-pointer disabled:cursor-not-allowed ";
  switch (props.variant) {
    case "primary":
      className +=
        "bg-moderate-blue hover:bg-light-grayish-blue disabled:bg-light-grayish-blue";
      break;
    case "secondary":
      className +=
        "bg-grayish-blue hover:bg-light-gray hover:text-dark-blue disabled:bg-light-gray disabled:text-dark-blue";
      break;
    case "danger":
      className += "bg-soft-red hover:bg-pale-red disabled:bg-pale-red";
      break;
  }

  return (
    <button className={className} {...props} disabled={props.loading}>
      <div>{props.children}</div>
      {props.loading && (
        <div className="w-[16px] h-[16px] border-2 border-dashed rounded-full animate-spin border-white mx-auto" />
      )}
    </button>
  );
};

export default Button;
