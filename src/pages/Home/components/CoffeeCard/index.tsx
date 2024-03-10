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

interface CoffeeCardProps {
  imgUrl: string
  filters: string[]
  name: string
  description: string
  price: number
}

export function CoffeeCard({
  imgUrl,
  filters,
  name,
  description,
  price,
}: CoffeeCardProps) {
  console.log({ imgUrl, filters, name, description, price })
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
          <ShopButton type="button">
            <ShoppingCart size={18} weight="fill" />
          </ShopButton>
        </BoxActions>
      </BoxPriceShop>
    </CoffeeCardContainer>
  )
}
