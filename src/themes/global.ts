import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Sora",sans-serif;
  }

  body{ 
    background:${theme.color.secondary[100]};
    font-size:16px;
  }


  button { 
    cursor:pointer
  }
`;
