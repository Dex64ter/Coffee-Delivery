import { ShoppingCart } from '@phosphor-icons/react'
import {
  CoffeeCardContainer,
  BoxPriceShop,
  BoxActions,
  ShopButton,
} from './styles'
import CoffeeImg from '../../../../assets/Coffee.svg'
import { InputNumber } from '../InputNumber'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={CoffeeImg} alt="Café visto por cima" />
      <span>Tradicional</span>
      <strong>Expresso Tradicional</strong>
      <span>O tradicional café feito com água quente e grãos moídos</span>
      <BoxPriceShop>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <BoxActions>
          <InputNumber />
          <ShopButton type="button">
            <ShoppingCart size={18} weight="fill" />
          </ShopButton>
        </BoxActions>
      </BoxPriceShop>
    </CoffeeCardContainer>
  )
}
