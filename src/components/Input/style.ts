import styled from "styled-components";
import { theme } from "../../themes";

export const InputWrapper = styled.div<{ mode: string }>`
  width: 100%;
  input {
    width: 100%;
    border-radius: ${({ mode }) => (mode === "primary" ? "0" : "25px")};
    outline: none;
    border: none;
    padding: 15px 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder {
      color: ${theme.color.secondary[200]};
    }
  }
`;
