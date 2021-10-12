export enum Portata {
  PRIMO = 'Primo',
  SECONDO = 'Secondo',
  CONTORNO = 'Contorno',
  DOLCE = 'Dolce',
}

export interface Recipe {
  id: string
  name: string
  time: number
  description: string
  ingredients: string[]
  portata: Portata
  instructions: string
  images: string[]
}

export enum MaxTimeFilters {
  MAX15 = '15',
  MAX30 = '30',
  MAX60 = '60',
}

export type Filter = {
  textual?: string
  maxTime?: MaxTimeFilters
  portata?: Portata
}
