import { Siderbar } from '../../components/SiderBar'
import { Container} from './styles'
import logoImg from '../../assets/logo.svg'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <Container>
      <Siderbar/>
      <section>
         <img src={logoImg}/>
         <Outlet/>
      </section>
    </Container>
  )
}
