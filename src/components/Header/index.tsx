import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { ActionsContainer, HeaderContainer } from "./styles";
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Copo de café para viagem com nome Coffee Delivery do lado" />
      <ActionsContainer>
        <div>
          <MapPin weight='fill' size={22} />
          Teresina, PI
        </div>
        <button>
          <ShoppingCart weight='fill' size={22} />
        </button>
      </ActionsContainer>
    </HeaderContainer>
  )
}