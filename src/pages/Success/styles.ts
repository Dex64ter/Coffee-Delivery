import styled from 'styled-components'

export const TitlePageSuccess = styled.h1`
  color: ${(props) => props.theme.product['yellow-dark']};
  font-family: 'Baloo 2', sans-serif;
  font-weight: bolder;
`

export const SubtitleSuccesPage = styled.h3`
  color: ${(props) => props.theme.base['base-subtitle']};
  font-size: 1.25rem;
  font-weight: 500;
`

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-top: 2.5rem;
`

export const MainInfo = styled.div`
  width: 100%;

  border: 1px solid;
  border-radius: 6px 36px;
  border-color: transparent;
  background-origin: border-box;
  background-image: ${(props) =>
    `linear-gradient(to right, ${props.theme.product.yellow}, ${props.theme.product.purple})`};
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.base.background};

  p {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }
`

interface IconBoxProps {
  variant: 'yellow' | 'purple' | 'yellow-dark'
}

export const IconBox = styled.div<IconBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.5rem;
  background: ${(props) => props.theme.product[props.variant]};
  color: ${(props) => props.theme.white};
`

export const IconBoxText = styled.div`
  display: flex;
  flex-direction: column;
`
