import { SnackContext } from "../../../App";
import Head from "../../../components/Head/indes";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useContext } from "react";




export default function Bebidas(){

    const {drinks} = useContext(SnackContext)  

    return(
        <>
        <Head title="Bebidas"/>
        <SnackTitle>Bebidas</SnackTitle>
        <Snacks snacks={drinks}></Snacks>
        </>
    ) 
}