import logoImg from '../../assets/logo.png'
import userImg from '../../assets/user.png'
import arrowImg from '../../assets/arrow.svg'
import { HeaderContainer, HeaderLogo, UserContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header(){

  return(

    <HeaderContainer>

      <HeaderLogo>
      
        <img src={logoImg} alt="seazone"/>
      
      </HeaderLogo>
      
      <NavLink activeClassName="active" exact to="/calendario">Calendario</NavLink>
      <NavLink activeClassName="active" exact to="/clientes">Clientes</NavLink>
      <NavLink activeClassName="active" exact to="/orçamentos">Orçamentos</NavLink>
      <NavLink activeClassName="active" to="/propriedades">Propriedades</NavLink>
      <NavLink activeClassName="active" exact to="/controle">Controle</NavLink>

      <UserContainer>
        
        <img src={userImg} alt="imagem do usuario" className="user"/>
        <img src={arrowImg} alt="Seta" className="arrow"/>
    
      </UserContainer>
    
    </HeaderContainer>

  )

}