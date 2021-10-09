export enum PORTATA {
  PRIMO,
  SECONDO,
  CONTORNO,
  DOLCE,
}

export interface Recipe {
  name: string
  time: number
  description: string
  ingredients: string
  portata: PORTATA
}

export type Filter = {
  textual?: string
  maxTime?: number
  portata?: PORTATA
}
