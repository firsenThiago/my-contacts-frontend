import { GlobalStyles, theme } from "./themes";
import { ThemeProvider } from "styled-components";
import { Container } from "./style";
import { Router } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Router />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
