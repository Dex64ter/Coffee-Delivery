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
} from './styles'

export function Success() {
  return (
    <div>
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
                  Entrega em <strong>Localização específica</strong>
                </span>
                <span>Marquês, Teresina - PI</span>
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
                <strong>Cartão de Crédito</strong>
              </IconBoxText>
            </p>
          </MainContent>
        </MainInfo>
        <img
          src={SaiuParaEntrega}
          alt="Rapaz em uma motocicleta saindo para entregar o pedido"
        />
      </MainContainer>
    </div>
  )
}
