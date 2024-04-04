import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { CoffeeProvider } from './contexts/CoffeeContext'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter basename="/Coffee-Delivery">
        <CoffeeProvider>
          <Router />
        </CoffeeProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
