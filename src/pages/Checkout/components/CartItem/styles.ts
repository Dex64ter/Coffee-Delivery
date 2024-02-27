import styled from 'styled-components'

export const CartItemContainer = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 0.5rem 0.25rem;
`

export const CoffeeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`

export const CoffeeImage = styled.img`
  width: 4rem;
  border-radius: 0.5rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.base['base-subtitle']};
  }

  & > div {
    height: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const RemoveButton = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.base['base-button']};
  color: ${(props) => props.theme.base['base-text']};
  line-height: 1.6;
  text-align: center;
  cursor: pointer;

  font-size: 14px;

  svg {
    color: ${(props) => props.theme.product.purple};
  }

  &:hover {
    background: ${(props) => props.theme.base['base-hover']};
    transition: 0.2s;
  }
`
