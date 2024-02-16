import styled from "styled-components";

export const HomeContainer = styled.div`
  
`;

export const Intro = styled.div`
  height: calc(100vh - 104px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 22.5rem;
  }
`;

export const ApresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 600px;

`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: ${props => props.theme.base["base-title"]};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: ${props => props.theme.base["base-subtitle"]};
  }
`;

const ItemIcon = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const;

interface ItemsContainerProps {
  color: keyof typeof ItemIcon;
}

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  span {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const Item = styled.div<ItemsContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: .5rem;
  color: ${props => props.theme.white};
  background-color: ${props => props.color === 'baseText' ? props.theme.base[ItemIcon[props.color]] : props.theme.product[ItemIcon[props.color]] };
`;