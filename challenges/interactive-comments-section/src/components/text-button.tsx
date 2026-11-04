import {
  ButtonHTMLAttributes,
  ReactNode,
  FC,
  cloneElement,
  ReactElement,
} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  children: ReactNode | string;
  loading?: boolean;
  icon?: ReactElement<{ className?: string }>;
};

const TextButton: FC<ButtonProps> = ({
  variant = "primary",
  children,
  loading = false,
  icon,
  className = "",
  ...rest
}) => {
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "text-moderate-blue hover:text-light-grayish-blue disabled:text-light-grayish-blue";
      break;
    case "secondary":
      variantClasses =
        "text-grayish-blue hover:text-light-gray disabled:text-light-gray";
      break;
    case "danger":
      variantClasses =
        "text-soft-red hover:text-pale-red disabled:text-pale-red";
      break;
  }

  const iconWithClass =
    icon &&
    cloneElement(icon, {
      className: `w-4 h-4 fill-current`, // Inherits text color
    });

  return (
    <button
      className={`flex items-center gap-1 font-medium rounded-lg transition-all duration-300 ease-in-out cursor-pointer disabled:cursor-not-allowed ${variantClasses} ${className}`}
      disabled={loading}
      {...rest}
    >
      {iconWithClass}
      <span>{children}</span>
    </button>
  );
};

export default TextButton;
