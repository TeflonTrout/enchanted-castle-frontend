export enum CardSets {"P1", "TFC", "RFB", "ITI"} 

export interface CardSet {
    id: number,
    name: string,
    card_count: number,
    set_code: string
}