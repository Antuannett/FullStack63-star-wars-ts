import Text from "./ui/Text.tsx";
import ErrorPage from "./ErrorPage.tsx";
import {useValidHero} from "../hooks/customHooks.ts";
import {starWarsInfo} from "../utils/constants.ts";

const StarWars = () => {
    const {isHeroValid} = useValidHero()

    return isHeroValid ? (
        <Text text={starWarsInfo}/>
    ) : <ErrorPage/>
}

export default StarWars;