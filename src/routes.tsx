import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import Pizzas from './pages/Main/Pizzas'
import Bebidas from './pages/Main/Bebidas'
import Sorvete from './pages/Main/Sorvetes'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
       <Route path='/' element={<BurgersPage />} />
       <Route path='/pizzas' element={<Pizzas/>} />
       <Route path='/bebidas' element={<Bebidas/>} />
       <Route path='/sorvetes' element={<Sorvete/>} />
      
      </Route>
    </Routes>
  )
}
