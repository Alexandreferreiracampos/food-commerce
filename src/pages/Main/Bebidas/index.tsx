
import Head from "../../../components/Head/indes";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useSnack } from "../../../hooks/useSnack";




export default function Bebidas(){

    const {drinks} =useSnack()

    return(
        <>
        <Head title="Bebidas"/>
        <SnackTitle>Bebidas</SnackTitle>
        <Snacks snacks={drinks}></Snacks>
        </>
    ) 
}