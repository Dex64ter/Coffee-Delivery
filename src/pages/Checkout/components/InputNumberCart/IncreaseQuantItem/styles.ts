import styled from 'styled-components'

export const CountButton = styled.button`
  height: 100%;
  background: ${(props) => props.theme.base['base-button']};
  color: ${(props) => props.theme.product.purple};
  outline: none;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  &:hover {
    color: ${(props) => props.theme.product['purple-dark']};
  }
`
