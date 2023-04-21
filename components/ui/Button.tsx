import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement;
}

const Button: FC<ButtonProps> = ({ children, icon, ...props }) => {
  return (
    <button {...props}>
      {icon} {children}
    </button>
  );
};

export default Button;
