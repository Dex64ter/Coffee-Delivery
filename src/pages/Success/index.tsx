import { ClockCountdown, CurrencyDollar, MapPin } from '@phosphor-icons/react'
import SaiuParaEntrega from '../../assets/Illustration.svg'
import {
  MainContainer,
  MainInfo,
  SubtitleSuccesPage,
  TitlePageSuccess,
  MainContent,
  IconBox,
  IconBoxText,
  SuccessContainer,
} from './styles'
import { useContext } from 'react'
import { CoffeePlaceContext } from '../../contexts/CoffeeContext'

export function Success() {
  const { deliveryAddress } = useContext(CoffeePlaceContext)

  function paymentTypeFormat(payment: string) {
    switch (payment) {
      case 'CreditCard':
        return 'Cartão de crédito'
      case 'DebitCard':
        return 'Cartão de débito'
      case 'Money':
        return 'Dinheiro'
      default:
        return 'Nenhuma forma de pagamento selecionada'
    }
  }
  return (
    <SuccessContainer>
      <TitlePageSuccess>Uhu! Pedido confirmado</TitlePageSuccess>
      <SubtitleSuccesPage>
        Agora é só aguardar que logo o café chegará até você
      </SubtitleSuccesPage>

      <MainContainer>
        <MainInfo>
          <MainContent>
            <p>
              <IconBox variant="purple">
                <MapPin size={16} weight="fill" />
              </IconBox>
              <IconBoxText>
                <span>
                  Entrega em
                  <strong>
                    {' '}
                    {deliveryAddress.street}, {deliveryAddress.numberHouse}{' '}
                  </strong>
                </span>
                <span>
                  {deliveryAddress.neighborhood}, {deliveryAddress.city} -{' '}
                  {deliveryAddress.uf}
                </span>
              </IconBoxText>
            </p>
            <p>
              <IconBox variant="yellow">
                <ClockCountdown size={16} weight="fill" />
              </IconBox>
              <IconBoxText>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </IconBoxText>
            </p>
            <p>
              <IconBox variant="yellow-dark">
                <CurrencyDollar size={16} />
              </IconBox>
              <IconBoxText>
                <span>Pagamento na entrega</span>
                <strong>
                  {paymentTypeFormat(deliveryAddress.paymentType)}
                </strong>
              </IconBoxText>
            </p>
          </MainContent>
        </MainInfo>
        <img
          src={SaiuParaEntrega}
          alt="Rapaz em uma motocicleta saindo para entregar o pedido"
        />
      </MainContainer>
    </SuccessContainer>
  )
}
