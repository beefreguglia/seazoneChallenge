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

  },
  amenities: 'aaa'

}

interface PropertiesProviderProps{

  children: ReactNode;

}

export const PropertiesContext = createContext<Item[]>([]);

export function PropertiesProvider({children}: PropertiesProviderProps){

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {

    api('items').then(response => setItems(response.data))

  }, [])

  return(
    <PropertiesContext.Provider value={items}>
      {children}
    </PropertiesContext.Provider>
  )

}