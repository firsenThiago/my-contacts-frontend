import { InputWrapper } from "./style";

export type InputProps = {
  placeholder: string;
  mode: "primary" | "secondary";
};

export const Input = ({ placeholder, mode }: InputProps) => {
  return (
    <InputWrapper mode={mode}>
      <input placeholder={placeholder} />
    </InputWrapper>
  );
};
