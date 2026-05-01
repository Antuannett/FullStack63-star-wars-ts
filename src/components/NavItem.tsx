import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";

const NavItem = ({itemTitle}: {itemTitle: string}) => {

    return (
        <NavLink to={`/${itemTitle.toLowerCase()}`}>
            <Button text={itemTitle}/>
        </NavLink>
    )
}

export default NavItem;