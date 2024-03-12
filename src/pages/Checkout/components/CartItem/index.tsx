import { Trash } from '@phosphor-icons/react'
import { InputNumber } from '../../../../components/InputNumber'
import {
  CoffeeImage,
  CartItemContainer,
  CoffeeContainer,
  ActionsContainer,
  RemoveButton,
} from './styles'
import { useContext } from 'react'
import { CoffeePlaceContext } from '../../../../contexts/CoffeeContext'

interface CartItemProps {
  name: string
  price: number
  imgUrl: string
}

export function CartItem({ name, price, imgUrl }: CartItemProps) {
  const { removeCoffeeType } = useContext(CoffeePlaceContext)

  function handleRemoveCoffeeItem() {
    removeCoffeeType({ name, price, imgUrl })
    console.log({ name, price, imgUrl })
  }

  const formattedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  return (
    <CartItemContainer>
      <CoffeeContainer>
        <CoffeeImage src={imgUrl} alt="Coffee" />
        <ActionsContainer>
          <span>{name}</span>
          <div>
            <InputNumber />
            <RemoveButton type="button" onClick={handleRemoveCoffeeItem}>
              <Trash size={20} />
              Remover
            </RemoveButton>
          </div>
        </ActionsContainer>
      </CoffeeContainer>
      <strong>{formattedPrice}</strong>
    </CartItemContainer>
  )
}
