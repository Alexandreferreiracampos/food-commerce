import { Container } from "./styles"
import {FiPlus} from 'react-icons/fi'
import { currencyFormat } from "../../helpers/currencyFormar"


interface snacksProps{
    snacks: any[]
}

export function Snacks({snacks}: snacksProps){
    return(
        <Container>
            {snacks.map((snacks)=>(
                <div key={snacks.id} className="snack">
                    <h2>{snacks.name}</h2>
                    <img src={snacks.image} alt={snacks.name}/>
                    <p>{snacks.description}</p>
                    <div>
                        <strong>{currencyFormat(snacks.price)}</strong>
                        <button type="button"><FiPlus/></button>
                    </div>
                    
                </div>
            ))}
        </Container>

    )

}