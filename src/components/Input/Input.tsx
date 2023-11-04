import { InputHTMLAttributes } from "react";
import { InputWrapper } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mode: "primary" | "secondary";
}
export const Input = ({ placeholder, type = "text", mode }: InputProps) => {
  return (
    <InputWrapper mode={mode}>
      <input placeholder={placeholder} type={type} />
    </InputWrapper>
  );
};
