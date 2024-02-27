import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { CountButton, InputNumberContainer } from './styles'

export function InputNumber() {
  const [count, setCount] = useState(0)

  function handleIncreaseCoffee() {
    setCount(count + 1)
  }

  function handleDecreaseCoffee() {
    setCount(count - 1)
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
