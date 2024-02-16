import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  background: ${props => props.theme.base.background};
  color: ${props => props.theme.base['base-text']};
  -webkit-font-smoothing: antialiased; /* Essa propriedade só funciona em macOS */ 
 }

 body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;
 }
 
`