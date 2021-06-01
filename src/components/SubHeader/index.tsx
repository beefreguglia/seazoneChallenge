import { Container } from "./styles";

export function SubHeader(){

  return(

    <Container>
      <form action="/properties" method="GET">

        <div className="filter">

          <h2>Localização</h2>
          <select name="localização">

            <option value="1">Florianópokis</option>

          </select>

        </div>

        <div className="filter">

          <h2>Preço</h2>
          <select name="price">

            <option value="1">300 - 10000</option>

          </select>

        </div>

        <div className="filter">

          <h2>Check-in</h2>
          <input type="date" name="checkin" />

        </div>

        <div className="filter">

          <h2>Check-out</h2>
          <input type="date" name="checkout" />

        </div>

        <div className="filter">

          <h2>Nº de hóspedes</h2>
          <input type="number" name="guests" />

        </div>

        <div className="buttons">

          <button type="submit">Buscar</button>
          <button className="maisfiltros">+ Mais Filtros</button>

        </div>
        

      </form>

    </Container>

  )

}