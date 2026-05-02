export interface SWContextValue {
    hero: string;
    isHero: boolean;
    changeHero: (hero: string) => void;
    changeIsHero: (isHero: boolean) => void;
}

export interface Hero {
    name: string;
    img: string;
    url: string;
}

// export interface Characters {
//     [key: string]: Hero;
// }

// export type Characters = Record<string, Hero>;