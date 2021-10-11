export enum PORTATA {
  PRIMO,
  SECONDO,
  CONTORNO,
  DOLCE,
}

export interface Recipe {
  id: string
  name: string
  time: number
  description: string
  ingredients: string[]
  portata: PORTATA
  instructions: string
  images: string[]
}

export type maxTimeFilters = 15 | 30 | 60

export type Filter = {
  textual?: string
  maxTime?: maxTimeFilters
  portata?: PORTATA
}
