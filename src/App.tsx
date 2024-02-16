import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <h1>Hello World</h1>
      <h1>Coffee Delivery</h1>
      <GlobalStyles/>
    </ThemeProvider>
  )
}