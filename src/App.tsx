import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  )
}