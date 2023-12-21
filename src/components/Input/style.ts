import styled from "styled-components";
import { theme } from "../../themes";

export const InputWrapper = styled.div<{ mode: string }>`
  width: 100%;
  input {
    width: 100%;
    border-radius: ${({ mode }) => (mode === "primary" ? "4px" : "25px")};
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
    outline: none;
    border: none;
    padding: 15px 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 2px solid ${theme.color.primary.white};
    transition: border-color 0.2s ease-in;
    &::placeholder {
      color: ${theme.color.secondary[200]};
    }
    &:focus {
      border: 2px solid ${theme.color.primary[100]};
    }
  }
`;
