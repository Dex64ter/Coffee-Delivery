import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2rem;
  max-width: 1120px;
  margin: 0 auto;

  h2 {
    font-size: 18px;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.base['base-subtitle']};
  }
`

export const InputData = styled.input`
  border: 0;
  border-radius: 4px;
  outline: 0;
  padding: 0.875rem;
  background: ${(props) => props.theme.base['base-input']};
  color: ${(props) => props.theme.base['base-text']};
  font-size: 14px;

  &::placeholder {
    color: ${(props) => props.theme.base['base-label']};
  }
`

const SectionType = styled.section`
  background: ${(props) => props.theme.base['base-card']};
  margin-top: 0.875rem;
  padding: 2.5rem;
`

export const SectionLocationPayment = styled(SectionType)`
  border-radius: 6px;
`

export const SectionResume = styled(SectionType)`
  border-top-right-radius: 44px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 44px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const DivListDivisor = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid ${(props) => props.theme.base['base-button']};
`

const CheckoutTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;

  p {
    display: flex;
    flex-direction: column;

    strong {
      color: ${(props) => props.theme.base['base-subtitle']};
      font-weight: 400;
    }

    span {
      font-size: 14px;
      color: ${(props) => props.theme.base['base-text']};
    }
  }
`

export const CheckoutTitleLocation = styled(CheckoutTitle)`
  svg {
    color: ${(props) => props.theme.product['yellow-dark']};
  }
`

export const CheckoutTitlePayment = styled(CheckoutTitle)`
  svg {
    color: ${(props) => props.theme.product.purple};
  }
`

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;
`

export const NumberComplement = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  input[type='number'] {
    width: 200px;
  }
`

export const Optional = styled.div`
  flex: 1;
  position: relative;

  input {
    width: 100%;
  }

  span {
    position: absolute;
    bottom: 0.875rem;
    right: 0.875rem;
    font-style: italic;
    font-size: 0.825rem;
    color: ${(props) => props.theme.base['base-label']};
  }
`

export const InputsLocation = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 0.75rem;
`

export const ResumeValues = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.base['base-text']};

      &:first-child {
        font-size: 0.875rem;
      }
    }

    strong {
      color: ${(props) => props.theme.base['base-subtitle']};
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`

export const ButtonSubmit = styled.button`
  border-radius: 6px;
  border: 0;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.product.yellow};
  color: ${(props) => props.theme.white};

  line-height: 1.6;
  font-size: 0.875rem;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.product['yellow-dark']};
    transition: 0.2s;
  }
`

export const PaymentType = styled(RadioGroup.Root)`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`

export const PaymentTypeButton = styled(RadioGroup.Item)`
  background: ${(props) => props.theme.base['base-button']};
  padding: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  border-radius: 6px;
  border: 0;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.base['base-hover']};
    transition: 0.2s;
  }

  svg {
    color: ${(props) => props.theme.product.purple};
  }

  span {
    font-size: 10px;
    color: ${(props) => props.theme.base['base-text']};
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme.product['purple-light']};
    outline: 1px solid ${(props) => props.theme.product.purple};
  }
`
