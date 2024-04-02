import { Plus } from '@phosphor-icons/react'
import { CountButton } from './styles'

interface IncreaseQuantItemProps {
  handleClickButton: () => void
}

export function IncreaseQuantItem({
  handleClickButton,
}: IncreaseQuantItemProps) {
  return (
    <CountButton type="button" onClick={handleClickButton}>
      <Plus size={14} weight="bold" />
    </CountButton>
  )
}
