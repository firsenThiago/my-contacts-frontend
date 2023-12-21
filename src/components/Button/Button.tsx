import { ButtonHTMLAttributes } from "react";
import { ButtonWrapper } from "./style";
import { Link } from "react-router-dom";

export type ButtonMode = "iconButton" | "primary" | "secondary" | "link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: ButtonMode;
  text?: string;
  icon?: string;
  alt?: string;
  toPage?: string;
  linkText?: any;
}

export const Button = ({
  mode,
  text,
  icon,
  alt,
  toPage,
  linkText,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonWrapper mode={mode}>
      <button {...rest}>
        {mode === "link" && toPage && <Link to={toPage}>{linkText}</Link>}
        {text && <span>{text}</span>}
        {icon && alt && <img src={icon} alt={icon} />}
      </button>
    </ButtonWrapper>
  );
};
