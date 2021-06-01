import { GlobalStyle } from './styles/global'
import { Header } from './components/Header';
import { SubHeader } from './components/SubHeader';
import { CardDetails } from './components/CardDetails';
import { RouteComponentProps } from 'react-router'
import { CardProvider } from './CardContext';


interface Params{

  id: string

}

const PropriedadesDetails: React.FC<RouteComponentProps<Params>> = (props)  => {
  
  const id = props.match.params.id;
  
  return (
  <CardProvider>
  
    <Header/>
    <SubHeader />
    <CardDetails  idprops={id}/>
    <GlobalStyle />
    
  </CardProvider>
 
 );
}

export default PropriedadesDetails;