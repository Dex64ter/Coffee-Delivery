import { useContext } from 'react'
import { CoffeePlaceContext } from '../../contexts/CoffeeContext'
import { CartItem } from './components/CartItem'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  CheckoutContainer,
  CheckoutTitleLocation,
  CheckoutTitlePayment,
  DivForm,
  InputData,
  InputsLocation,
  NumberComplement,
  Optional,
  SectionLocationPayment,
  SectionResume,
  DivListDivisor,
  ResumeValues,
  ButtonSubmit,
  PaymentType,
  PaymentTypeButton,
  ListItems,
} from './styles'

export function Checkout() {
  const { coffees } = useContext(CoffeePlaceContext)
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <SectionLocationPayment>
          <CheckoutTitleLocation>
            <MapPinLine size={22} />
            <p>
              <strong>Endereço de entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </p>
          </CheckoutTitleLocation>
          <DivForm>
            <InputData
              type="text"
              pattern="[0-9]{5}-[0-9]{3}"
              placeholder="CEP"
            />
            <InputData type="text" placeholder="Rua" />

            <NumberComplement>
              <InputData type="number" placeholder="Número" />
              <Optional>
                <InputData type="text" placeholder="Complemento" />
                <span>Opcional</span>
              </Optional>
            </NumberComplement>

            <InputsLocation>
              <InputData type="text" placeholder="Bairro" />
              <InputData type="text" placeholder="Cidade" />
              <InputData type="text" maxLength={2} placeholder="UF" />
            </InputsLocation>
          </DivForm>
        </SectionLocationPayment>
        <SectionLocationPayment>
          <CheckoutTitlePayment>
            <CurrencyDollar size={22} />
            <p>
              <strong>Pagamento</strong>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </p>
          </CheckoutTitlePayment>
          <PaymentType>
            <PaymentTypeButton value="CreditCard">
              <CreditCard size={16} />
              <span>CARTÃO DE CRÉDITO</span>
            </PaymentTypeButton>
            <PaymentTypeButton value="DebitCard">
              <Bank size={16} />
              <span>CARTÃO DE DÉBITO</span>
            </PaymentTypeButton>
            <PaymentTypeButton value="Money">
              <Money size={16} />
              <span>DINHEIRO</span>
            </PaymentTypeButton>
          </PaymentType>
        </SectionLocationPayment>
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <SectionResume>
          <ListItems>
            {coffees.map((cof) => {
              return (
                <>
                  <CartItem
                    key={cof.name}
                    name={cof.name}
                    price={cof.price}
                    imgUrl={cof.imgUrl}
                    quantity={cof.quantity}
                  />
                  <DivListDivisor />
                </>
              )
            })}
          </ListItems>

          <ResumeValues>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </ResumeValues>
          <ButtonSubmit type="submit">CONFIRMAR PEDIDO</ButtonSubmit>
        </SectionResume>
      </div>
    </CheckoutContainer>
  )
}
