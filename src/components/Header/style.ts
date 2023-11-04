import styled from "styled-components";
import { theme } from "../../themes";

export const HeaderWrapper = styled.div`
  h1 {
    color: ${theme.color.primary[100]};
    span {
      color: ${theme.color.secondary[900]};
    }
  }
`;
