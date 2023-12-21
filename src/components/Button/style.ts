import styled from "styled-components";
import { theme } from "../../themes";
import { ButtonMode } from "./Button";

export const ButtonWrapper = styled.div<{
  mode: ButtonMode;
}>`
  button {
    background: transparent;
    border: none;
  }

  ${({ mode }) =>
    mode === "iconButton" &&
    `
      button {
        border: none;
        display: flex;
        align-items: center;
        span {
          color: ${theme.color.primary[100]};
          margin-right: 8px;
          font-weight: bold;
        }
      }
    `}

  ${({ mode }) =>
    mode === "primary" &&
    `
      button {
        width: 100%;
        background: ${theme.color.primary[100]};
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px; 
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
        border-radius: 4px;
        span {
          color: ${theme.color.primary.white};
            font-weight: 600;
        }
      }
    `}
     ${({ mode }) =>
    mode === "secondary" &&
    `
      button {
      margin-left: 8px;
    }
    `}
        ${({ mode }) =>
    mode === "link" &&
    `
      button {
        width: 100%;
        a {
            width: 100%;
            color: ${theme.color.primary[100]};
            font-weight: 600;
            padding: 8px 16px;
            border-radius: 4px;
            border: 2px solid ${theme.color.primary[100]};
            text-decoration: none;
            transition: all 0.2s ease-in;
            &:hover {
                background-color: ${theme.color.primary[100]};
                color: ${theme.color.primary.white};
            }
        }
    }
    `}
`;
