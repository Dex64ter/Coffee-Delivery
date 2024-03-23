import { createContext, ReactNode, useState } from 'react'

interface CoffeeType {
  name: string
  price: number
  imgUrl: string
  quantity: number
}

interface DeliveryAddressType {
  cep: string
  street: string
  numberHouse: number
  complement?: string
  neighborhood: string
  city: string
  uf: string
  paymentType: string
}

interface CoffeeContextType {
  coffees: CoffeeType[]
  deliveryAddress: DeliveryAddressType
  upgradeDeliveryAddress: (address: DeliveryAddressType) => void
  addCoffeeType: (coffee: CoffeeType) => void
  removeCoffeeType: (coffee: CoffeeType) => void
}

export const CoffeePlaceContext = createContext({} as CoffeeContextType)

interface CoffeeProviderProps {
  children: ReactNode
}

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeType[]>([])
  const [deliveryAddress, setDeliveryAddress] = useState(
    {} as DeliveryAddressType,
  )

  function upgradeDeliveryAddress(newAddress: DeliveryAddressType) {
    setDeliveryAddress(newAddress)
  }

  function addCoffeeType(coffee: CoffeeType) {
    let isAlreadyAdded = false
    const newCoffeeList = coffees.map((cof) => {
      if (cof.name === coffee.name) {
        isAlreadyAdded = true
        return {
          ...cof,
          quantity: cof.quantity + coffee.quantity,
        }
      } else {
        return cof
      }
    })
    !isAlreadyAdded
      ? setCoffees([coffee, ...coffees])
      : setCoffees(newCoffeeList)
  }

  function removeCoffeeType(coffee: CoffeeType) {
    const newCoffeeList = coffees.filter((cof) => cof.name !== coffee.name)
    setCoffees(newCoffeeList)
  }

  return (
    <CoffeePlaceContext.Provider
      value={{
        coffees,
        deliveryAddress,
        upgradeDeliveryAddress,
        addCoffeeType,
        removeCoffeeType,
      }}
    >
      {children}
    </CoffeePlaceContext.Provider>
  )
}
