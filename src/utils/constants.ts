import type {SortOption} from "../../types/SortOption"

export const colorList:string[] = ["Amber", "Amethyst", "Emerald", "Ruby", "Sapphire", "Steel"]
export const rarityList:string[] = ["Common", "Uncommon", "Rare", "Super Rare", "Legendary", "Enchanted", "Promo"]
export const sortArray:SortOption[] = [
    {optionName: "Card Number", optionValue: "cardNumber"},
    {optionName: "Attack", optionValue: "attack"}, 
    {optionName: "Willpower", optionValue: "willpower"}, 
    {optionName: "Lore", optionValue: "lore"}, 
    {optionName: "Name", optionValue: "alphabetical"}
]