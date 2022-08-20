import { Menu } from "semantic-ui-react"
import "./Header.scss"
import { useState } from "react"
import { useHistory ,useLocation} from "react-router-dom";


export default function Header() {


    const currentPath = useLocation();
    const finalCurrentPath = currentPath.pathname.replace("/","");
    
    const [activeItem, setActiveItem] = useState(finalCurrentPath);
    const history = useHistory();



    const handlerItemCick = (e,{name}) => {
        setActiveItem(name);
        console.log(currentPath)
        history.push(name);
    };
    


    return (
        <div className="header-menu">
            <Menu secondary>
                <Menu.Item name="inicio" active={activeItem === 'inicio'} onClick={handlerItemCick} />
                <Menu.Item name="series" active={activeItem === 'series'} onClick={handlerItemCick} />
                <Menu.Item name="comics" active={activeItem === 'comics'} onClick={handlerItemCick} />
            </Menu>
            <p>Desde Header</p>
        </div>
    )
}