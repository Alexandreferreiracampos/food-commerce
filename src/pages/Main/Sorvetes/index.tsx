import { SnackContext } from "../../../contexts/SnackContext";
import Head from "../../../components/Head/indes";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useContext} from "react";


export default function Sorvete(){
     
     const {iceCreams} = useContext(SnackContext);
    
    return(<>
        <Head title="Sorvete"/>
        <SnackTitle>Sorvete</SnackTitle>
        <Snacks snacks={iceCreams}></Snacks>
        </>
        )
}