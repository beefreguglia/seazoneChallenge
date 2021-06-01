import { GlobalStyle } from './styles/global'
import { Header } from './components/Header';
import { SubHeader } from './components/SubHeader';
import { PropContent } from './components/PropContent';
import { CardProvider } from './CardContext';

export function Propriedades() {
  return (
    <CardProvider>
    
      <Header/>
      <SubHeader />
      <PropContent />
      <GlobalStyle />
      
    </CardProvider>
 
 );
}
