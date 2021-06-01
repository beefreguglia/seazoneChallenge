import { PropContainer } from './styles'
import { Card } from '../Card'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CardContext } from '../../CardContext';

export function PropContent() {

  const items = useContext(CardContext);

  return (


    <PropContainer>

      <div className="header">

        <div>

          <h1>Todos os Imóveis</h1>
          <p>200 imoveis</p>

        </div>

        <select name="order" placeholder="Ordenar">

          <option value="1">Ordenar</option>

        </select>

      </div>

      <section className="cards">

        {items.map(item => {

          return <Link key={item.id} to={`/propriedades/${item.id}`} style={{ textDecoration: 'none' }}><Card item={item}/></Link>

        })}

      </section>

    </PropContainer>


  )

}