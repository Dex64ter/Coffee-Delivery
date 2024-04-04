import Expresso from '../../../public/coffees/Expresso.svg'
import Americano from '../../../public/coffees/Americano.svg'
import ExpressoCremoso from '../../../public/coffees/ExpressoCremoso.svg'
import CaffeeGelado from '../../../public/coffees/CaffeeGelado.svg'
import CoffeeComLeite from '../../../public/coffees/CoffeeComLeite.svg'
import Latte from '../../../public/coffees/Latte.svg'
import Capuccino from '../../../public/coffees/Capuccino.svg'
import Macchiato from '../../../public/coffees/Macchiato.svg'
import Mochaccino from '../../../public/coffees/Mochaccino.svg'
import ChocolateQuente from '../../../public/coffees/ChocolateQuente.svg'
import Cubano from '../../../public/coffees/Cubano.svg'
import Havaiano from '../../../public/coffees/Havaiano.svg'
import Arabe from '../../../public/coffees/Arabe.svg'

export const menu = [
  {
    id: 0,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    filters: ['tradicional'],
    price: 9.9,
    image: Expresso,
  },
  {
    id: 1,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    filters: ['tradicional'],
    price: 9.9,
    image: Americano,
  },
  {
    id: 2,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    filters: ['tradicional'],
    price: 9.9,
    image: ExpressoCremoso,
  },
  {
    id: 3,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    filters: ['tradicional, gelado'],
    price: 9.9,
    image: CaffeeGelado,
  },
  {
    id: 4,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    filters: ['tradicional', 'com leite'],
    price: 9.9,
    image: CoffeeComLeite,
  },
  {
    id: 5,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    filters: ['tradicional', 'com leite'],
    price: 9.9,
    image: Latte,
  },
  {
    id: 6,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    filters: ['tradicional', 'com leite'],
    price: 9.9,
    image: Capuccino,
  },
  {
    id: 7,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    filters: ['tradicional', 'com leite'],
    price: 9.9,
    image: Macchiato,
  },
  {
    id: 8,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    filters: ['tradicional', 'com leite'],
    price: 9.9,
    image: Mochaccino,
  },
  {
    id: 9,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    filters: ['especial', 'com leite'],
    price: 9.9,
    image: ChocolateQuente,
  },
  {
    id: 10,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    filters: ['especial', 'alcoólico, gelado'],
    price: 9.9,
    image: Cubano,
  },
  {
    id: 11,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    filters: ['especial'],
    price: 9.9,
    image: Havaiano,
  },
  {
    id: 12,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    filters: ['especial'],
    price: 9.9,
    image: Arabe,
  },
  {
    id: 13,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    filters: ['especial', 'alcoólico'],
    price: 9.9,
    image: Expresso,
  },
]
