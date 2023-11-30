export interface Card {
  action: string
  artist: string
  attack: number
  body_text: string
  card_set_code: string
  card_set_id: number
  color: string
  color_id: number
  edition: Edition[]
  flavor: string
  franchise: Franchise
  id: number
  image: string
  ink_cost: number
  inkable: boolean
  language: string
  languages: Languages
  lore: number
  name: string
  number: number
  number_in_set: string
  rarity: string
  subtypes: string[] | null
  text_separator: string
  title: string
  type: string
  willpower: number
}

export interface Edition {
  code: string
  id: number
  name: string
}

export interface Franchise {
  franchise_code: string
  franchise_id: number
  franchise_name: string
}

export interface Languages {
  DE: De
  EN: En
  FR: Fr
}

export interface De {
  action: string
  card_id: number
  flavor: string
  image: string
  language: string
  name: string
  title: string
}

export interface En {
  action: string
  card_id: number
  flavor: string
  image: string
  language: string
  name: string
  title: string
}

export interface Fr {
  action: string
  card_id: number
  flavor: string
  image: string
  language: string
  name: string
  title: string
}
