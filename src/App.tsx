import { GlobalStyles, theme } from "./themes";
import { ThemeProvider } from "styled-components";
import { Home } from "./screens";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
