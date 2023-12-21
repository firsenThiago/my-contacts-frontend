import { SelectHTMLAttributes } from "react";
import { SelectWrapper } from "./style";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

export const Select = ({ options, placeholder, ...rest }: SelectProps) => {
  return (
    <SelectWrapper>
      <select {...rest}>
        {placeholder && (
          <option disabled selected>
            {placeholder}
          </option>
        )}

        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </SelectWrapper>
  );
};
