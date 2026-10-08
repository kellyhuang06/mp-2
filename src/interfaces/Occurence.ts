export interface Occurence {
    key: number;
    scientificName: string;
    kingdom?: string;
    country?: string;
    eventDate?: string;
    media?: {identifier?: string}[];
}