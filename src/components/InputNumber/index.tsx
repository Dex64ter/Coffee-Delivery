import { Minus, Plus } from '@phosphor-icons/react'
import { CountButton, InputNumberContainer } from './styles'

interface InputNumberProps {
  count: number
  handleSetCount: (value: number) => void
}

export function InputNumber({ count, handleSetCount }: InputNumberProps) {
  function handleIncreaseCoffee() {
    handleSetCount(count + 1)
  }

  function handleDecreaseCoffee() {
    handleSetCount(count - 1)
  }

  return (
    <InputNumberContainer>
      <CountButton onClick={handleDecreaseCoffee} type="button">
        <Minus size={14} weight="bold" />
      </CountButton>
      <input type="number" value={count} min={1} />
      <CountButton onClick={handleIncreaseCoffee} type="button">
        <Plus size={14} weight="bold" />
      </CountButton>
    </InputNumberContainer>
  )
}
