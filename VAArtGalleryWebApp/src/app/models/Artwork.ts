export interface Artwork{
    id? : string;

    name : string;

    author : string;

    creationYear : number

    askPrice : number
}

type KeysEnum<T> = { [P in keyof T]: true };
export const ArtworkKeys: KeysEnum<Artwork> = {
    name: true,
    author: true,
    creationYear: true,
    askPrice: true
};