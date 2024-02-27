import { Trash } from '@phosphor-icons/react'
import { InputNumber } from '../../../../components/InputNumber'
import {
  CoffeeImage,
  ListItemContainer,
  CoffeeContainer,
  ActionsContainer,
  RemoveButton,
} from './styles'
import Cafe from '../../../../assets/coffees/Expresso.svg'

export function CoffeeListItem() {
  return (
    <ListItemContainer>
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
    </ListItemContainer>
  )
}
