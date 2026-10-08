export interface Occurrence {
    key: number;
    scientificName: string;
    kingdom?: string;
    country?: string;
    eventDate?: string;
    media?: {identifier?: string}[];
}