import Head from "../../../components/Head/indes";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useEffect, useState } from "react";
import { getIceCreams } from "../../../services/api";
import { SnackData } from "../../../interfaces/SnackData";


export default function Sorvete(){
  const [sorvete, setSorvet] = useState<SnackData[]>([])

  useEffect(()=>{
    (async ()=>{
      const sorveteRequest = await getIceCreams()
      setSorvet(sorveteRequest.data)
    })()
  }, [])

    
    return(<>
        <Head title="Sorvete"/>
        <SnackTitle>Sorvete</SnackTitle>
        <Snacks snacks={sorvete}></Snacks>
        </>
        )
}