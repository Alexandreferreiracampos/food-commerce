import { ReactNode, createContext , useEffect, useState } from "react";
import { SnackData } from "../interfaces/SnackData";
import { getBurgers, getDrinks, getIceCreams, getPizzas } from "../services/api";



interface SnackContextProps{
    burgers:SnackData[]
    pizzas:SnackData[]
    drinks:SnackData[]
    iceCreams: SnackData[]
  }

interface SnackProviderProps{
    children: ReactNode
}
  export const SnackContext = createContext({} as SnackContextProps);

  export function SnackProvider({children}: SnackProviderProps){
    
  const [burgers, setBurgers] = useState<SnackData[]>([]);
  const [drinks, setDrinks] = useState<SnackData[]>([]);
  const [pizzas, setPizzas] = useState<SnackData[]>([]);
  const [iceCreams, setIceCreams] = useState<SnackData[]>([]);  

    useEffect(()=>{;
        (async ()=>{
           const burgerRequest = await getBurgers();
           const drinksRequest = await getDrinks();
           const pizzasReques = await getPizzas();
           const iceCreamsReques = await getIceCreams();

           setBurgers(burgerRequest.data);
           setDrinks(drinksRequest.data);
           setPizzas(pizzasReques.data);
           setIceCreams(iceCreamsReques.data);
        })()
    },[])

    return (
        <SnackContext.Provider value={{burgers, drinks, pizzas, iceCreams}}>
        {children}
        </SnackContext.Provider>
    )

  }