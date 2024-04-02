import { InputNumberContainer } from './styles'
import { DecreaseQuantItem } from './DecreaseQuantItem'
import { IncreaseQuantItem } from './IncreaseQuantItem'
import { CoffeePlaceContext } from '../../../../contexts/CoffeeContext'
import { useContext } from 'react'

interface InputNumberProps {
  count: number
  nameCoffee: string
  handleSetCount: (value: number) => void
}

export function InputNumberCart({
  count,
  handleSetCount,
  nameCoffee,
}: InputNumberProps) {
  const { decreaseQuantityCoffee, increaseQuantityCoffee } =
    useContext(CoffeePlaceContext)

  function handleClickToDecrease() {
    handleSetCount(count - 1)
    decreaseQuantityCoffee(nameCoffee)
  }

  function handleClickToIncrease() {
    handleSetCount(count + 1)
    increaseQuantityCoffee(nameCoffee)
  }

  return (
    <InputNumberContainer>
      <DecreaseQuantItem handleClickButton={handleClickToDecrease} />
      <input type="number" value={count} min={1} />
      <IncreaseQuantItem handleClickButton={handleClickToIncrease} />
    </InputNumberContainer>
  )
}
