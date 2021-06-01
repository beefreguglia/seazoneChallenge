import styled from 'styled-components';

export const PropContainer = styled.div`

  max-width: 1120px;
  margin: 1rem auto;
  
  .header{

    display: flex;
    justify-content: space-between;

    h1{

      color: var(--primary-color);
      font-size: 25px;

    }

    p{

      color: var(--text-gray);

    }

    select{

      margin: 0.8rem 0;

      border:  1px solid var(--text-gray);
      color: var(--text-gray);
      padding: 0.3rem 1rem;

    }

  }

  .cards{

    margin-top: 2rem;
    max-width: 100rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5rem;
    

  }

`