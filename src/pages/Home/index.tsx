import { ApresentationContainer, HomeContainer, Intro, Item, ItemsContainer, TitleContainer } from "./styles";
import IntroImage from '../../assets/Imagem-coffee-intro.svg'
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <ApresentationContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </TitleContainer>

          <ItemsContainer>
            <span>
              <Item color="yellowDark">
                <ShoppingCart size={16} weight="fill"/>
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
    </HomeContainer>
  )
}