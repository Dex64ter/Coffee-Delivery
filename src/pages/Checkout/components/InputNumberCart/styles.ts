import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  height: 100%;
  width: 4.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
    outline: none;
    border: 0;
    height: 100%;
    max-width: 1.5rem;
    text-align: center;
    background: ${(props) => props.theme.base['base-button']};
    color: ${(props) => props.theme.base['base-title']};
    line-height: 0;
  }
`
