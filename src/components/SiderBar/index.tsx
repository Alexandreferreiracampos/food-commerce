import { Container } from "./styles";
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import menuImg from '../../assets/menu.svg';


export function Siderbar(){
    return (
        <Container>
            <button type="button">
                <img src={menuImg} alt='Abrir e fechar Menu'/>
            </button>
            <nav>
                <ul>
                    <li>
                        <a href="#" className="active">
                            <BurgerIcon/>
                            <span>Hambúrgueres</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}