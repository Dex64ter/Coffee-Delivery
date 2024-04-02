import { createContext, ReactNode, useState } from 'react'
import { NewAddressFormProps } from '../pages/Checkout'

interface CoffeeType {
  name: string
  price: number
  imgUrl: string
  quantity: number
}

interface CoffeeContextType {
  coffees: CoffeeType[]
  deliveryAddress: NewAddressFormProps
  upgradeDeliveryAddress: (address: NewAddressFormProps) => void
  addCoffeeType: (coffee: CoffeeType) => void
  removeCoffeeType: (coffee: CoffeeType) => void
  increaseQuantityCoffee: (nameCof: string) => void
  decreaseQuantityCoffee: (nameCof: string) => void
}

export const CoffeePlaceContext = createContext({} as CoffeeContextType)

interface CoffeeProviderProps {
  children: ReactNode
}

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeType[]>([])
  const [deliveryAddress, setDeliveryAddress] = useState(
    {} as NewAddressFormProps,
  )

  function increaseQuantityCoffee(nameCof: string) {
    const newCoffeeList = coffees.map((cof) => {
      if (cof.name === nameCof) {
        return {
          ...cof,
          quantity: cof.quantity + 1,
        }
      } else {
        return cof
      }
    })
    setCoffees(newCoffeeList)
  }

  function decreaseQuantityCoffee(nameCof: string) {
    const newCoffeeList = coffees.map((cof) => {
      if (cof.name === nameCof) {
        return {
          ...cof,
          quantity: cof.quantity - 1,
        }
      } else {
        return cof
      }
    })
    setCoffees(newCoffeeList)
  }

  function upgradeDeliveryAddress(newAddress: NewAddressFormProps) {
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
        decreaseQuantityCoffee,
        increaseQuantityCoffee,
      }}
    >
      {children}
    </CoffeePlaceContext.Provider>
  )
}
