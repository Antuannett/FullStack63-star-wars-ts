import Navigation from "./Navigation.tsx";
import {characters, defaultHero} from "../utils/constants.ts";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const Header = () => {
    const {hero, isHero} = useContext(SWContext)

    if (hero === defaultHero && !isHero) {
        return (
            <header className="rounded-t-3xl bg-gray">
                <Navigation/>
                <h1 className="text-center text-4xl py-6">O-ops! something went wrong</h1>
            </header>
        )
    }else {
        return (
            <header className="rounded-t-3xl bg-gray">
                <Navigation/>
                <h1 className="text-center text-4xl py-6">{characters[hero].name}</h1>
            </header>
        )
    }

}

export default Header;