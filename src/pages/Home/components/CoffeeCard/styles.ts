import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme.base['base-card']};
  height: 310px;
  /* width: 16rem; */
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 0.875rem;
  padding: 1.25rem;

  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  text-align: center;

  img {
    top: -20px;
    position: absolute;
    width: 120px;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`

export const FilterType = styled.span`
  background: ${(props) => props.theme.product['yellow-light']};
  color: ${(props) => props.theme.product['yellow-dark']};

  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: bold;
  border-radius: 100px;
`

export const TitleItem = styled.strong`
  font-size: 1.25rem;
  font-family: 'Baloo 2', sans-serif;
`

export const Description = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.base['base-label']};
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
  height: 100%;
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
