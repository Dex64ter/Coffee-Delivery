import styled  from 'styled-components';

export const HeaderContainer = styled.header`
  width: calc(100vw - 20rem);
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  position: sticky;
  position: -webkit-sticky;
  top: 0;

  background-color: ${props => props.theme.base.background};
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: .5rem;

    font-size: 0.875rem;
    background-color: ${props => props.theme.product['purple-light']};
    color: ${props => props.theme.product['purple-dark']};

    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.product['yellow-light']};
    color: ${props => props.theme.product['yellow-dark']};
    
    padding: 8px;
    border: none;
    border-radius: 6px;

    cursor: pointer;
  }
`;