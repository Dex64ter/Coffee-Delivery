import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 999;

  background-color: ${(props) => props.theme.base.background};
`
export const HeaderContent = styled.div`
  width: calc(100vw - 20rem);
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0.5rem;

    font-size: 0.875rem;
    background-color: ${(props) => props.theme.product['purple-light']};
    color: ${(props) => props.theme.product['purple-dark']};

    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.product['yellow-light']};
    color: ${(props) => props.theme.product['yellow-dark']};
    position: relative;

    padding: 8px;
    border: none;
    border-radius: 6px;

    cursor: pointer;

    div {
      position: absolute;
      right: -8px;
      top: -10px;
      height: 20px;
      width: 20px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.product['yellow-dark']};
      span {
        text-align: center;
        font-size: 0.75rem;
        font-weight: bold;
        color: ${(props) => props.theme.white};
      }
    }
  }
`
