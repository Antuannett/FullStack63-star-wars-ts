import {createContext} from "react";
import {defaultHero} from "./constants.ts";
import type {SWContextValue} from "./types";

export const SWContext  = createContext<SWContextValue>({
    hero: defaultHero,
    isHero: true,
    changeHero: (hero: string) => console.log(hero),
    changeIsHero: (isHero: boolean) => console.log(isHero),
});
