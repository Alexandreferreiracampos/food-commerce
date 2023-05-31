import Head from "../../../components/Head/indes";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useEffect, useState } from "react";
import { getPizzas } from "../../../services/api";
import { SnackData } from "../../../interfaces/SnackData";


export default function Pizzas(){

  const [pizza, setPizza] = useState<SnackData[]>([])

  useEffect(()=>{
    (async ()=>{
      const pizzaRequest = await getPizzas()
      setPizza(pizzaRequest.data)
    })()
  }, [])

    return(
    <>
    <Head title="Pizzas"/>
    <SnackTitle>Pizzas</SnackTitle>
    <Snacks snacks={pizza}></Snacks>
    </>
    )
}