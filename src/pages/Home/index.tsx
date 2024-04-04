// import { api } from '../../services/api'
import IntroImage from '../../assets/Imagem-coffee-intro.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { CoffeeCard } from './components/CoffeeCard'
import { menu } from './cafes'
import {
  ApresentationContainer,
  CoffeeList,
  FilterType,
  FiltersContainer,
  HomeContainer,
  Intro,
  Item,
  ItemsContainer,
  TitleContainer,
  TitleFilter,
} from './styles'

type Coffee = {
  id: number
  name: string
  description: string
  filters: string[]
  price: number
  image: string
}

export function Home() {
  const [coffeeMenu, setCoffeeMenu] = useState<Coffee[]>([])
  const [filteredList, setFilteredList] = useState<Coffee[]>([])

  function handleFilter(valor: string) {
    const filterList = coffeeMenu.filter((item) => {
      return item.filters.includes(valor)
    })
    setFilteredList(filterList)
  }

  useEffect(() => {
    // Código para buscar os cafés da API quando utilizada, Json server

    // async function getCoffees() {
    //   const getListCoffee = await api
    //     .get('/coffees')
    //     .then((response) => response.data)
    //     .catch((error) => console.log(error))

    //   const coffees = getListCoffee.map((item: Coffee) => {
    //     const { id, name, description, filters, price, image } = item

    //     return {
    //       id,
    //       name,
    //       description,
    //       filters,
    //       price,
    //       image,
    //     }
    //   })
    //   setCoffeeMenu(coffees)
    // }

    function getCoffees() {
      const coffees = menu.map((item: Coffee) => {
        const { id, name, description, filters, price, image } = item

        return {
          id,
          name,
          description,
          filters,
          price,
          image,
        }
      })
      setCoffeeMenu(coffees)
    }
    getCoffees()
  }, [])

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

        <FiltersContainer>
          <FilterType
            onClick={() => handleFilter('tradicional')}
            value="tradicional"
          >
            TRADICIONAL
          </FilterType>
          <FilterType onClick={() => handleFilter('especial')} value="especial">
            ESPECIAL
          </FilterType>
          <FilterType
            onClick={() => handleFilter('com leite')}
            value="com leite"
          >
            COM LEITE
          </FilterType>
          <FilterType
            onClick={() => handleFilter('alcoólico')}
            value="alcoolico"
          >
            ALCOÓLICO
          </FilterType>
          <FilterType onClick={() => handleFilter('gelado')} value="gelado">
            GELADO
          </FilterType>
        </FiltersContainer>
      </TitleFilter>

      <CoffeeList>
        {filteredList.length > 0
          ? filteredList.map((item) => {
              return (
                <CoffeeCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  filters={item.filters}
                  price={item.price}
                  imgUrl={item.image}
                />
              )
            })
          : coffeeMenu.map((item) => {
              return (
                <CoffeeCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  filters={item.filters}
                  price={item.price}
                  imgUrl={item.image}
                />
              )
            })}
      </CoffeeList>
    </HomeContainer>
  )
}
