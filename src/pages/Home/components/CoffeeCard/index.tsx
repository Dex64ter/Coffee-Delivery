import { ShoppingCart } from '@phosphor-icons/react'
import {
  CoffeeCardContainer,
  BoxPriceShop,
  BoxActions,
  ShopButton,
  FilterType,
  FilterContainer,
  Description,
  TitleItem,
} from './styles'
import { InputNumber } from '../../../../components/InputNumber'
import { useContext, useState } from 'react'
import { CoffeePlaceContext } from '../../../../contexts/CoffeeContext'

interface CoffeeCardProps {
  name: string
  description: string
  filters: string[]
  price: number
  imgUrl: string
}

interface CoffeeType {
  name: string
  price: number
  imgUrl: string
  quantity: number
}

export function CoffeeCard({
  imgUrl,
  filters,
  name,
  description,
  price,
}: CoffeeCardProps) {
  const { addCoffeeType } = useContext(CoffeePlaceContext)
  const [quantity, setQuantity] = useState(1)

  function handleAddToShopCart() {
    const item: CoffeeType = {
      name,
      price,
      imgUrl,
      quantity,
    }
    addCoffeeType(item)
  }

  function handleSetQuantity(value: number) {
    setQuantity(value)
  }

  return (
    <CoffeeCardContainer>
      <img src={imgUrl} alt="Café visto por cima" />
      <FilterContainer>
        {filters.map((filter) => (
          <FilterType key={filter}>{filter}</FilterType>
        ))}
      </FilterContainer>
      <TitleItem>{name}</TitleItem>
      <Description>{description}</Description>
      <BoxPriceShop>
        <span>
          R$
          <strong>{price.toFixed(2).replace('.', ',')}</strong>
        </span>
        <BoxActions>
          <InputNumber count={quantity} handleSetCount={handleSetQuantity} />
          <ShopButton type="button" onClick={handleAddToShopCart}>
            <ShoppingCart size={18} weight="fill" />
          </ShopButton>
        </BoxActions>
      </BoxPriceShop>
    </CoffeeCardContainer>
  )
}
