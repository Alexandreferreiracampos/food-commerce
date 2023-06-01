import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackData } from './interfaces/SnackData'
import { createContext , useEffect, useState } from "react";
import { getBurgers, getDrinks, getIceCreams, getPizzas } from './services/api'

interface SnackContextProps{
  burgers:SnackData[]
  pizzas:SnackData[]
  drinks:SnackData[]
  iceCreams: SnackData[]
}
export const SnackContext = createContext({} as SnackContextProps);

export default function App() {

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
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider value={{burgers, drinks, pizzas, iceCreams}}>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
        </SnackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}
