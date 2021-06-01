import { CardContainer } from './styles'
import seazoneIcon from '../../assets/seazoneIcon.png'
import airbnbIcon from '../../assets/airbnbIcon.png'
import dotsIcon from '../../assets/dots.png'

interface CardProps{

  item: {

    id: number,
    name: string,
    image: string,
    description: string,
    maxguests: number,
    clean: number,
    deposit: number,
    address: {

      district: string,

    },

  }

}

export function Card(props: CardProps){

  return(

    <CardContainer>

      <div className="img__container">

        <img src={props.item.image} alt="foto" />

        <div className="icons">

          <img src={airbnbIcon} alt="icone airbnb" />
          <img src={seazoneIcon} alt="icone seazone" />

        </div>
      
      </div>

      <div className="name__container">

        <h1>{props.item.name}</h1>
        <img src={dotsIcon} alt="Icone escolha" />

      </div>

      <div className="description__container">

        <p>{props.item.address.district}</p>
        <p>.</p>
        <p>{props.item.maxguests} hóspedes</p>
        <p>.</p>
        <p>{props.item.description} quartos</p>

      </div>

      <div className="item">

        <p>Valor diária</p>
        <p>R$700,00 / noite</p>

      </div>

      <div className="item">

        <p>Total 5 diárias</p>
        <p>R$3500,00</p>

      </div>

      <div className="item">

        <p>Taxa de limpeza</p>
        <p>R${props.item.clean},00</p>

      </div>

      <div className="item">

        <p>Caução</p>
        <p>R${props.item.deposit},00</p>

      </div>

      <div className="item">

        <h3>Total</h3>

        <div className="total">

          <p>R$3700,00</p>
          <p>|</p>
          <p>R$3330,00</p>

        </div>

      </div>

      <div className="item">

        <p></p>
        <p>à vista</p>

      </div>

    </CardContainer>

  )

}