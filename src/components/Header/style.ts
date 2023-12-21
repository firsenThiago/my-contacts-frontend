import styled from "styled-components";
import { theme } from "../../themes";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 74px;
  margin-bottom: 48px;
  h1 {
    color: ${theme.color.primary[100]};
    span {
      color: ${theme.color.secondary[900]};
    }
  }
`;
