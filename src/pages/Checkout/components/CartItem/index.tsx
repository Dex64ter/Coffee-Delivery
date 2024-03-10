import { Trash } from '@phosphor-icons/react'
import { InputNumber } from '../../../../components/InputNumber'
import {
  CoffeeImage,
  CartItemContainer,
  CoffeeContainer,
  ActionsContainer,
  RemoveButton,
} from './styles'
import Cafe from '/images/coffees/Expresso.svg'

export function CartItem() {
  return (
    <CartItemContainer>
      <CoffeeContainer>
        <CoffeeImage src={Cafe} alt="Coffee" />
        <ActionsContainer>
          <span>Expresso Tradicional</span>
          <div>
            <InputNumber />
            <RemoveButton type="button">
              <Trash size={20} />
              Remover
            </RemoveButton>
          </div>
        </ActionsContainer>
      </CoffeeContainer>
      <strong>R$ 9,90</strong>
    </CartItemContainer>
  )
}
