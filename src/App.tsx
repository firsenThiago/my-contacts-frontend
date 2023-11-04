import { GlobalStyles, theme } from "./themes";
import { ThemeProvider } from "styled-components";
import { Home } from "./screens";
import { Container } from "./style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
