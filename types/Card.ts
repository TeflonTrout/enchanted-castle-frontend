export interface Card {
  card_uid: string
  action: string
  artist: string
  attack: number
  body_text: string[]
  set_code: string
  set_id: number
  color: string
  color_id: number
  flavor: string
  franchise: Franchise
  id: number
  image: string
  ink_cost: number
  inkable: boolean
  language: string
  lore: number
  name: string
  number: number
  number_in_set: string
  rarity: string
  subtypes: string[] | null
  subname: string
  text_separator: string
  type: string
  willpower: number
}

export interface Franchise {
  franchise_id: number
  franchise_name: string
  franchise_code: string
}