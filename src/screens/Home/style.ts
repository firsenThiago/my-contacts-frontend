import styled from "styled-components";
import { theme } from "../../themes";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    margin-top: 49px;
  }
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
  a {
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
`;

export const ListContainer = styled.div`
  margin-top: 24px;
  header {
    margin-bottom: 8px;

    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
        color: ${theme.color.primary[100]};
        margin-right: 8px;
        font-weight: bold;
      }
    }
  }
`;
