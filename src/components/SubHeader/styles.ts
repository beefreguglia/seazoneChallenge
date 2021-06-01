import styled from 'styled-components';

export const Container = styled.div`

  border-bottom: 1px solid rgba(0,0,0,0.2);

  form{

    max-width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 2rem auto;


    .filter{

      position: relative;
      height: 4rem;

      h2{

        font-size: 14px;
        color: var(--primary-color);
        margin-bottom: 0.2rem;

      }

      input, select{

        border:  1px solid #999999;
        color: var(--text-gray);
        width: 100%;
        height: 2rem;
        position: absolute;

      }

      & + .filter{

        margin-left: 1rem;

      }

      &:nth-child(1){

        padding-right: 11rem;

      }
      &:nth-child(2){

        padding-right: 7rem;

      }
      &:nth-child(3), &:nth-child(4) {

        padding-right: 5rem;

      }
      &:nth-child(5) {

        padding-right: 1rem;

      }

    }

    .buttons{

      box-sizing: border-box;
      align-self: flex-end;
      margin-bottom: 14px;
      

      button[type=submit]{

        background-color: var(--secondary-color);
        color: white;
        border-radius: 8px;
        padding: 0.5rem 1.5rem;
        margin-left: 1rem;
        border: none;
        box-shadow: 0px 2px 6px -2px rgba(0,0,0,0.4);

        &:hover{

          filter: brightness(0.8);

        }
      
      }

      .maisfiltros{

        border: none;
        color: var(--secondary-color);
        background-color: white;
        border-radius: 8px;
        margin-left: 1rem;
        font-weight: bold;

        &:hover{

            filter: brightness(0.8);

        }

      }

    }

  }
  

`