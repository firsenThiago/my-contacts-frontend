import styled from "styled-components";
import { theme } from "../../themes";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactsListWrapper = styled.div`
  width: 100%;
  margin-top: 32px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong {
    color: ${theme.color.secondary[900]};
    font-size: 24px;
    font-weight: 700;
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;
  header {
    margin-bottom: 8px;
  }
`;
