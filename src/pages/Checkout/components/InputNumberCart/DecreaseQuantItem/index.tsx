import { Minus } from '@phosphor-icons/react'
import { CountButton } from './styles'

interface DescreaseQuantItemProps {
  handleClickButton: () => void
}

export function DecreaseQuantItem({
  handleClickButton,
}: DescreaseQuantItemProps) {
  return (
    <CountButton type="button" onClick={handleClickButton}>
      <Minus size={14} weight="bold" />
    </CountButton>
  )
}
