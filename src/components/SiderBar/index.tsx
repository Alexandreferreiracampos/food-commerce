import {useState} from 'react';
import { Container } from "./styles";
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg';
import { ReactComponent as SodaIcon } from '../../assets/soda.svg';
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg';
import menuImg from '../../assets/menu.svg';


export function Siderbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }


    return (
        <Container isMenuOpen={menuOpen}>
            <button type="button" onClick={handleToggleMenu}>
                <img src={menuImg} alt='Abrir e fechar Menu'/>
            </button>
            <nav>
                <ul>
                    <li>
                        <a href="/"  className="active">
                            <BurgerIcon/>
                            <span>Hambúrgueres</span>
                        </a>
                    </li>
                    <li>
                        <a href="pizzas" >
                            <PizzaIcon/>
                            <span>Pizza</span>
                        </a>
                    </li>
                    <li>
                        <a href="bebidas" >
                            <SodaIcon/>
                            <span>Bebidas</span>
                        </a>
                    </li>
                    <li>
                        <a href="sorvetes" >
                            <IceCreamIcon/>
                            <span>Sorvetes</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}