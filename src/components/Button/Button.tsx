import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  icon?: string;
  alt?: string;
}

export const Button = ({ children, icon, alt }: ButtonProps) => {
  return (
    <button>
      {children && <span>{children}</span>}
      {icon && alt && <img src={icon} alt={icon} />}
    </button>
  );
};
