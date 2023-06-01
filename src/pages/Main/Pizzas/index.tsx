import Head from "../../../components/Head/indes";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useContext } from "react";
import { SnackContext } from "../../../App";

export default function Pizzas(){

    const {pizzas} = useContext(SnackContext);

    return(
    <>
    <Head title="Pizzas"/>
    <SnackTitle>Pizzas</SnackTitle>
    <Snacks snacks={pizzas}></Snacks>
    </>
    )
}