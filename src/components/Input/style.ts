import styled from "styled-components";
import { theme } from "../../themes";

export const InputWrapper = styled.div<{ mode: string }>`
  input {
    width: 500px;
    height: 50px;
    border-radius: ${({ mode }) => (mode === "primary" ? "0" : "25px")};
    outline: none;
    border: none;
    padding: 15px 16px;
    color: ${theme.color.secondary[200]};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
