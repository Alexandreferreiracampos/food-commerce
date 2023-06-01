
import Head from "../../../components/Head/indes";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useSnack } from "../../../hooks/useSnack";


export default function Sorvete(){
     
     const {iceCreams} = useSnack();
    
    return(<>
        <Head title="Sorvete"/>
        <SnackTitle>Sorvete</SnackTitle>
        <Snacks snacks={iceCreams}></Snacks>
        </>
        )
}