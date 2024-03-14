import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { ActionsContainer, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { CoffeePlaceContext } from '../../contexts/CoffeeContext'
import { useContext } from 'react'

export function Header() {
  const { coffees } = useContext(CoffeePlaceContext)
  return (
    <HeaderContainer>
      <img
        src={Logo}
        alt="Copo de café para viagem com nome Coffee Delivery do lado"
      />
      <ActionsContainer>
        <div>
          <MapPin weight="fill" size={22} />
          Teresina, PI
        </div>
        <NavLink to="/checkout" title="Página de checkout">
          {coffees.length > 0 && (
            <div>
              <span>{coffees.length}</span>
            </div>
          )}
          <ShoppingCart weight="fill" size={22} />
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
