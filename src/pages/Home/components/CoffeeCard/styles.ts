import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme.base['base-card']};
  height: 310px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;
  padding: 1.25rem;

  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  text-align: center;

  img {
    margin-top: -40px;
  }
`

export const BoxPriceShop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.875rem;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
    }
  }
`

export const BoxActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ShopButton = styled.button`
  background: ${(props) => props.theme.product['purple-dark']};
  color: ${(props) => props.theme.base['base-card']};
  padding: 0.5rem;
  outline: 0;
  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.product.purple};
    transition: 0.2s;
  }
`
