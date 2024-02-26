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
      <CountButton onClick={handleDecreaseCoffee}>
        <Minus size={14} weight="bold" />
      </CountButton>
      <input type="number" value={count} min={0} />
      <CountButton onClick={handleIncreaseCoffee}>
        <Plus size={14} weight="bold" />
      </CountButton>
    </InputNumberContainer>
  )
}
