import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  height: 38px;
  max-width: 4.5rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme.base['base-button']};
  border-radius: 6px;

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
    background: transparent;
    width: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme.base['base-title']};
    line-height: 0;
  }
`

export const CountButton = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  color: ${(props) => props.theme.product.purple};
  outline: none;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`
