import styled from "styled-components";
import { theme } from "../../themes";

export const PageHeaderWrapper = styled.header`
  a {
    text-decoration: none;
    color: ${theme.color.primary[100]};
    display: flex;
    align-items: center;
    gap: 8px;
    img {
      transform: rotate(-90deg);
    }
    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
  h1 {
    font-size: 24px;
    margin-top: 8px;
  }
`;
