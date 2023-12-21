import styled from "styled-components";
import { theme } from "../../themes";

export const InfoWrapper = styled.div`
  background: ${theme.color.primary.white};
  padding: 16px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    margin-top: 16px;
  }
  .info {
    .contact-name {
      display: flex;
      align-items: center;
      small {
        background: ${theme.color.primary[200]};
        color: ${theme.color.primary[100]};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }
    span {
      display: block;
      font-size: 14px;
      color: ${theme.color.secondary[200]};
    }
  }
  .actions {
    display: flex;
    align-items: center;
    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
