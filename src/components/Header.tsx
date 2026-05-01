import Navigation from "./Navigation.tsx";
import {useParams} from "react-router";
import {characters, defaultHero} from "../utils/constants.ts";

const Header = () => {
    const {heroId = defaultHero} = useParams()
    if (heroId in characters) {
    return (
        <header className="rounded-t-3xl bg-gray">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">{characters[heroId as keyof typeof characters].name}</h1>
        </header>
    ) } else {
      return (
          <header className="rounded-t-3xl bg-gray">
              <Navigation/>
              <h1 className="text-center text-4xl py-6">O-ops invalid hero</h1>
          </header>
      )
    }
}

export default Header;