import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CoffeePlaceContext } from '../../contexts/CoffeeContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { formatPrices } from '../../utils/formatPrices'
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

type FormDataType = {
  cep: string
  street: string
  numberHouse: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
  paymentType: 'CreditCard' | 'DebitCard' | 'Money'
}

const newAdressFormSchema = z.object({
  cep: z.string().refine((value) => /^\d{5}-?\d{3}$/.test(value), {
    message: 'CEP inválido. O formato esperado é "xxxxx-xxx" ou "xxxxxxxx".',
  }),
  street: z.string().min(1, 'Informe a rua'),
  numberHouse: z.string().min(1, 'Informe o número da residência'),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(1, 'Informe o UF'),
  paymentType: z.enum(['CreditCard', 'DebitCard', 'Money'], {
    invalid_type_error: 'Informe forma de pagamento',
  }),
})

export type NewAddressFormProps = z.infer<typeof newAdressFormSchema>

export function Checkout() {
  const { coffees, upgradeDeliveryAddress } = useContext(CoffeePlaceContext)
  const toSuccess = useNavigate()
  const { register, handleSubmit, control } = useForm<FormDataType>({
    resolver: zodResolver(newAdressFormSchema),
  })

  function handleSubmitForm(data: FormDataType) {
    if (!coffees.length)
      return alert('Precisa ter pelo menos um item no carrinho')
    upgradeDeliveryAddress(data)
    toSuccess('/success')
  }

  const deliveryValor = 3.5

  const totalItems = coffees.reduce((acc, cof) => {
    return acc + cof.quantity * cof.price
  }, 0)

  return (
    <CheckoutContainer>
      <form id="order" onSubmit={handleSubmit(handleSubmitForm)}>
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
            <InputData type="text" placeholder="CEP" {...register('cep')} />

            <InputData type="text" placeholder="Rua" {...register('street')} />

            <NumberComplement>
              <InputData
                type="number"
                placeholder="Número"
                {...register('numberHouse')}
              />
              <Optional>
                <InputData
                  type="text"
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </Optional>
            </NumberComplement>

            <InputsLocation>
              <InputData
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              <InputData
                type="text"
                placeholder="Cidade"
                {...register('city')}
              />
              <InputData
                type="text"
                maxLength={2}
                placeholder="UF"
                {...register('uf')}
              />
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

          <Controller
            name="paymentType"
            control={control}
            render={({ field }) => {
              return (
                <PaymentType
                  onValueChange={field.onChange}
                  value={String(field.value)}
                >
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
              )
            }}
          />
        </SectionLocationPayment>
      </form>

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
              <span>{formatPrices(totalItems)}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>{formatPrices(deliveryValor)}</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>{formatPrices(totalItems + deliveryValor)}</strong>
            </div>
          </ResumeValues>

          <ButtonSubmit type="submit" form="order">
            CONFIRMAR PEDIDO
          </ButtonSubmit>
        </SectionResume>
      </div>
    </CheckoutContainer>
  )
}
