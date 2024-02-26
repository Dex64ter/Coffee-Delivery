import IntroImage from '../../assets/Imagem-coffee-intro.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import Americano from '../../assets/coffees/Americano.svg'
import Arabe from '../../assets/coffees/Arabe.svg'
import Gelado from '../../assets/coffees/CaffeeGelado.svg'
import Capuccino from '../../assets/coffees/Capuccino.svg'
import ChocoQuente from '../../assets/coffees/ChocolateQuente.svg'
import ComLeite from '../../assets/coffees/CoffeeComLeite.svg'
import Cubano from '../../assets/coffees/Cubano.svg'
import Expresso from '../../assets/coffees/Expresso.svg'
import ExCremoso from '../../assets/coffees/ExpressoCremoso.svg'
import Havaiano from '../../assets/coffees/Havaiano.svg'
import Irlandes from '../../assets/coffees/Irlandes.svg'
import Latte from '../../assets/coffees/Latte.svg'
import Macchiato from '../../assets/coffees/Macchiato.svg'
import Mochaccino from '../../assets/coffees/Mochaccino.svg'

import {
  ApresentationContainer,
  CoffeeList,
  HomeContainer,
  Intro,
  Item,
  ItemsContainer,
  TitleContainer,
  TitleFilter,
} from './styles'
import { CoffeeCard } from './components/CoffeeCard'

type Coffee = {
  id: number
  imgUrl: string
  filters: string[]
  name: string
  description: string
  price: number
}

const CoffeeMenu: Coffee[] = [
  {
    id: 0,
    imgUrl: Expresso,
    filters: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 1,
    imgUrl: Americano,
    filters: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 2,
    imgUrl: ExCremoso,
    filters: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 3,
    imgUrl: Gelado,
    filters: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 4,
    imgUrl: ComLeite,
    filters: ['Tradicional', 'Com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 5,
    imgUrl: Latte,
    filters: ['Tradicional', 'Com leite'],
    name: 'Latte',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 6,
    imgUrl: Capuccino,
    filters: ['Tradicional'],
    name: 'Capuccino',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 7,
    imgUrl: Macchiato,
    filters: ['Tradicional'],
    name: 'Macchiato',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 8,
    imgUrl: Mochaccino,
    filters: ['Tradicional'],
    name: 'Mochaccino',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 9,
    imgUrl: ChocoQuente,
    filters: ['Tradicional'],
    name: 'Chocolate Quente',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 10,
    imgUrl: Cubano,
    filters: ['Tradicional'],
    name: 'Café Cubano',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 11,
    imgUrl: Havaiano,
    filters: ['Tradicional'],
    name: 'Café Havaiano',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 12,
    imgUrl: Arabe,
    filters: ['Tradicional'],
    name: 'Café Árabe',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 13,
    imgUrl: Irlandes,
    filters: ['Tradicional'],
    name: 'Café Irlandês',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
]

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <ApresentationContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContainer>

          <ItemsContainer>
            <span>
              <Item color="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </Item>
              Compra simples e segura
            </span>

            <span>
              <Item color="baseText">
                <Package size={16} weight="fill" />
              </Item>
              Embalagem mantém o café intacto
            </span>

            <span>
              <Item color="yellow">
                <Timer size={16} weight="fill" />
              </Item>
              Entrega rápida e rastreada
            </span>

            <span>
              <Item color="purple">
                <Coffee size={16} weight="fill" />
              </Item>
              O café chega fresquinho até você
            </span>
          </ItemsContainer>
        </ApresentationContainer>
        <img src={IntroImage} alt="Copo de café um pouco dobrado" />
      </Intro>

      <TitleFilter>
        <strong>Nossos cafés</strong>
        <div>
          <button>TRADICIONAL</button>
          <button>ESPECIAL</button>
          <button>COM LEITE</button>
          <button>ALCOÓLICO</button>
          <button>GELADO</button>
        </div>
      </TitleFilter>

      <CoffeeList>
        {CoffeeMenu.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              imgUrl={coffee.imgUrl}
              filters={coffee.filters}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
            />
          )
        })}
      </CoffeeList>
    </HomeContainer>
  )
}
