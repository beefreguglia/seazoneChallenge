import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface Item {

  id: number,
  name: string,
  image: string,
  description: string,
  status: string,
  maxguests: number,
  clean: number,
  deposit: number,
  address: {

    street: string,
    number: number,
    district: string,
    city: string,
    state: string,

  },
  amenities: string[]

}

interface CardProviderProps{

  children: ReactNode;

}

export const CardContext = createContext<Item[]>([]);

export function CardProvider({children}: CardProviderProps){

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {

    api('items').then(response => setItems(response.data))

  }, [])

  return(
    <CardContext.Provider value={items}>
      {children}
    </CardContext.Provider>
  )

}