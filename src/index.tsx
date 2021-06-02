import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createServer } from 'miragejs';
import { App } from './App';
import { Propriedades } from './Propriedades';
import  PropriedadesDetails  from './PropriedadesDetails'


createServer({

  routes(){

    this.namespace = 'api';
    
    this.get('/items', () => {

      return[

        {

          id: 1,
          name: 'JBM - Suite Top vista mar resort Jurere',
          image: 'https://images.unsplash.com/photo-1481253127861-534498168948?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
          description: '2 quartos',
          status: 'Livre',
          maxguests: 5,
          clean: 20,
          deposit: 50,
          address: {

            street:'Av Buzios',
            number: 180,
            district: 'Jurerê Internacional',
            state: 'SC',
            city: 'Florianópolis',

          },
          amenities: ["Tv","Wifi","Estacionamento","Elevador"]

        },
        {

          id: 2,
          name: 'ICL505 - Suite cama de casal perto do centro de convenções',
          image: 'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          description: '3 quartos',
          status: 'Livre',
          maxguests: 8,
          clean: 100,
          deposit: 80,
          address: {

            street:'Praça orlando vieira',
            number: 35,
            district: 'Pormincas',
            city: 'Ouro Branco',
            state: 'MG',

          },
          amenities: ["Tv","Wifi","Estacionamento","Elevador"]

        },
        {

          id: 3,
          name: 'LOL - Av São Cristovão',
          image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          description: '2 quartos',
          status: 'Livre',
          maxguests: 4,
          clean: 80,
          deposit: 300,
          address: {

            street:'Rua Lombarde',
            number: 45,
            district: 'Limoeira',
            city: 'São Paulo',
            state: 'SP'


          },
          amenities: ["Tv","Wifi","Estacionamento","Elevador"]

        },
        {

          id: 4,
          name: 'JGGY - Chalé aos arredores de Gramado',
          image: 'https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
          description: '3 quartos',
          status: 'livre',
          maxguests: 9,
          clean: 150,
          deposit: 300,
          address: {

            street:'Rua nossa senhora das dores',
            number: 4512,
            district: 'Lua Nova',
            city: 'Rio de Janeiro',


          },
          amenities: ["Tv","Wifi","Estacionamento","Elevador"]

        },
        {

          id: 5,
          name: 'SDI - Suite Top vista mar resort Olhos verdes',
          image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          description: '1 quarto',
          status: 'livre',
          maxguests: 3,
          clean: 80,
          deposit: 500,
          address: {

            street:'Rua das dores',
            number: 584,
            district: 'Lua nova',
            city: 'Olhos Verdes',
            state: 'SC'

          },
          amenities: ["Tv","Wifi","Estacionamento","Elevador"]

        },
        {

          id: 6,
          name: 'SDH - Casa Grande e boa vista',
          image: 'https://images.unsplash.com/photo-1588151146398-00962e986475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          description: '3quartos',
          status: 'Livre',
          maxguests: 12,
          clean: 202,
          deposit: 550,
          address: {

            street:'Rua da Esperança',
            number: 1514,
            district: 'Verdes Mares',
            city: 'Curitiba',
            state:'PR'

          },
          amenities: ["Tv","Wifi","Estacionamento","Elevador"]

        },

      ]

    })

  }

})

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true}/>
      <Route path="/propriedades" component={Propriedades} exact={true}/>
      <Route path="/propriedades/:id" component={PropriedadesDetails} />
      <Route path="/calendario" component={App} exact={true}/>
      <Route path="/clientes" component={App} exact={true}/>
      <Route path="/orçamentos" component={App} exact={true}/>
      <Route path="/controle" component={App} exact={true}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
