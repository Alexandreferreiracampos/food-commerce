import { useEffect, useState } from "react";
import Head from "../../../components/Head/indes";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { getBurgers } from "../../../services/api";


export default function Burgers(){

    const [burgres, setBurges] = useState([]);
    
    useEffect(()=>{
        (async ()=>{
           const burgerRequest = await getBurgers();
           
           setBurges(burgerRequest.data)
        })()
    },[])
 
    return(
        <>
        <Head title="Hambúrgueres"/>
        <SnackTitle>Hambúrgueres</SnackTitle>
        <Snacks snacks={burgres}></Snacks>
        </>
    ) 

    
}