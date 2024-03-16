import { Trash } from '@phosphor-icons/react'
import { InputNumber } from '../../../../components/InputNumber'
import {
  CoffeeImage,
  CartItemContainer,
  CoffeeContainer,
  ActionsContainer,
  RemoveButton,
} from './styles'
import { useContext, useState } from 'react'
import { CoffeePlaceContext } from '../../../../contexts/CoffeeContext'

interface CartItemProps {
  name: string
  price: number
  imgUrl: string
  quantity: number
}

export function CartItem({ name, price, imgUrl, quantity }: CartItemProps) {
  const { removeCoffeeType } = useContext(CoffeePlaceContext)
  const [quant, setQuant] = useState(quantity)

  function handleSetQuantity(value: number) {
    setQuant(value)
  }

  function handleRemoveCoffeeItem() {
    removeCoffeeType({ name, price, imgUrl, quantity })
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
            <InputNumber count={quant} handleSetCount={handleSetQuantity} />
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
