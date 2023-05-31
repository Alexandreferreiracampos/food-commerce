import Head from "../../../components/Head/indes";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { SnackData } from "../../../interfaces/SnackData";
import { getDrinks } from "../../../services/api";
import { useEffect, useState } from "react";


export default function Bebidas(){
  const [drinks, setDrinks] = useState<SnackData[]>([]);
    
  useEffect(()=>{
      (async ()=>{
         const burgerRequest = await getDrinks();
         
         setDrinks(burgerRequest.data)
      })()
  },[])

    return(
        <>
        <Head title="Bebidas"/>
        <SnackTitle>Bebidas</SnackTitle>
        <Snacks snacks={drinks}></Snacks>
        </>
    ) 
}