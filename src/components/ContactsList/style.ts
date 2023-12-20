import styled from "styled-components";
import { theme } from "../../themes";

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

export const Card = styled.div`
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
