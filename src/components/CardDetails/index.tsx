import {CardDetailsContainer} from './styles'
import usersIcon from '../../assets/users.png'
import cleanIcon from '../../assets/clean.png'
import moneyIcon from '../../assets/money.png'
import { useContext } from 'react';
import { CardContext } from '../../CardContext';

interface CardDetailsProps{

  idprops: string

}

export function CardDetails(props: CardDetailsProps){

  const items = useContext(CardContext);
  const id = parseInt(props.idprops)
  const data = items.filter(item => item.id === id)[0];

  return(

    <CardDetailsContainer>

      <div className="headerDetails">

        <p>Imóveis</p>
        <p> - </p> 
        <p>{data?.address.district}</p>

      </div>

      <div className="contentDetails">

        <section className="image">

          <img src={data?.image} alt="foto" />
          <h2>Localização</h2>
          <p>{data?.address.street} {data?.address.number}, {data?.address.district}, {data?.address.city} - {data?.address.state} </p>
          <p>CEP 89650-100</p>
          <button>Ver localização</button>

        </section>
        
        <section className="content">

          <h1>{data?.name}</h1>
          <div className="address">
            <p>{data?.address.district},</p>
            <p>{data?.address.city}</p>
          </div>
          <div className="apt">

            <div className="description">

              <p>{data?.description}</p>
              <p>.</p>
              <p>3 camas</p>
              <p>.</p>
              <p>2 banheiros</p>

            </div>

            <div className="status">

              <p>{data?.status}</p>

            </div>

          </div>

          <div className="cards">

            <div className="card">

              <p>Máx. de hóspedes</p>
              <div className="cardDetails">

                <img src={usersIcon} alt="icone" />
                <p>{data?.maxguests}</p>

              </div>

            </div>
            
            <div className="card">

              <p>Taxa de limpeza</p>
              <div className="cardDetails">

                <img src={cleanIcon} alt="icone" />
                <p>R${data?.clean},00</p>

              </div>

            </div>
            
            <div className="card">

              <p>Caução</p>
              <div className="cardDetails">

                <img src={moneyIcon} alt="icone" />
                <p>R${data?.deposit},00</p>

              </div>

            </div>

          </div>

          <div className="beds">

            <h2>Camas</h2>
            <div className="bedsContent">

              <ul>

                <li><span>1 cama de casal:</span> duplo</li>
                <li><span>1 sofá de cama:</span> sala/área comum</li>

              </ul>


            </div>

          </div>

          <div className="rules">

            <h2>Regras</h2>

           <div className="rulesContent">

            <div className="rulesItem">

              <p>Aceita Crianças (de 02 até 12 anos)</p>
              <span className="sim">sim</span>

            </div>
            <div className="rulesItem">

              <p>Aceita Bebês (abaixo de 02 anos)</p>
              <span className="sim">sim</span>

            </div>
            <div className="rulesItem">

              <p>Fornece berços</p>
              <span className="nao">não</span>

            </div>
            <div className="rulesItem">

              <p>Restrição de idade Mínima para fazer reserva</p>
              <span className="nao">não</span>

            </div>
            <div className="rulesItem">

              <p>Permitido Fumar no Quarto</p>
              <span className="nao">não</span>

            </div>
            <div className="rulesItem">

              <p>Aceita animais de estimação</p>
              <span className="nao">não</span>

            </div>
            <div className="rulesItem">

              <p>Eventos são Permitidos</p>
              <span className="sim">sim</span>

            </div>

           </div>

           <button>Mais regras</button>

          </div>

          <div className="comodidades">

            <h2>Comodidades</h2>

            <div className="comodidadesContent">

              <ul>
              
              {data?.amenities.map(amenitie => {return(

                <div className="item" key={amenitie}>

                  <li>{amenitie}</li>
                  <span className="sim">sim</span>

                </div>

              )})}

              </ul>

            </div>

          </div>

        </section>

      </div>

    </CardDetailsContainer>

  )

}