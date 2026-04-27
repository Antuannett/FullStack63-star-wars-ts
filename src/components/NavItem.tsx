import {SWContext} from "../utils/context.ts";
import {useContext} from "react";
import Button from "./ui/Button.tsx";

const NavItem = ({itemTitle}: {itemTitle: string}) => {
    const {changePage} = useContext(SWContext);

    return (
        <div onClick={() => changePage(itemTitle)}>
            <Button text={itemTitle}/>
        </div>
    )
}

export default NavItem;