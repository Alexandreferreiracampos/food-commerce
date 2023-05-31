import { Container } from "./styles"
import {FiPlus} from 'react-icons/fi'
import { currencyFormat } from "../../helpers/currencyFormar"
import { SkeletonSnack } from "./SkeletonSnack"


interface snacksProps{
    snacks: any[]
}

export function Snacks({snacks}: snacksProps){
    return(
        <Container>
            {!snacks.length ? (
                [1,2,3,4].map((n)=><SkeletonSnack key={n}/>)
            ) : 
            (
                snacks.map((snacks)=>(
                    <div key={snacks.id} className="snack">
                        <h2>{snacks.name}</h2>
                        <img src={snacks.image} alt={snacks.name}/>
                        <p>{snacks.description}</p>
                        <div>
                            <strong>{currencyFormat(snacks.price)}</strong>
                            <button type="button"><FiPlus/></button>
                        </div>
                        
                    </div>
                ))
            )
            }
            
        </Container>

    )

}