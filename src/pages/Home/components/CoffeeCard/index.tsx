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
import { useContext } from 'react'
import { CoffeePlaceContext } from '../../../../contexts/CoffeeContext'

interface CoffeeCardProps {
  name: string
  description: string
  filters: string[]
  price: number
  imgUrl: string
}

export function CoffeeCard({
  imgUrl,
  filters,
  name,
  description,
  price,
}: CoffeeCardProps) {
  const { addCoffeeType } = useContext(CoffeePlaceContext)

  function handleAddToShopCart() {
    const item = {
      name,
      price,
      imgUrl,
    }
    addCoffeeType(item)
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
          <InputNumber />
          <ShopButton type="button" onClick={handleAddToShopCart}>
            <ShoppingCart size={18} weight="fill" />
          </ShopButton>
        </BoxActions>
      </BoxPriceShop>
    </CoffeeCardContainer>
  )
}
