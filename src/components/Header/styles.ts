import styled from 'styled-components';

export const HeaderContainer = styled.header`

  background-color: var(--primary-color);
  display: flex;
  align-items: center;

  a{

    padding: 1.2rem 1rem;
    text-decoration: none;
    color: white;
    font-size: 14px;
    position: relative;

  }

  a + a{

    margin-left: 2rem;

  }

  a:hover{

    background-color: rgba(255,255,255,0.2);

  }

  .active{
    
    background-color: rgba(255,255,255,0.2);

  }

  a.active::after{

    content: "";
    width: 80%;
    height: 4px;
    background-color: var(--secondary-color);
    position: absolute;
    bottom: 0;
    left: 11px;
    border-radius: 8px;

  }

  a::after{

    content: "";
    width: 0;
    height: 4px;
    background-color: var(--secondary-color);
    position: absolute;
    bottom: 0;
    left: 10px;
    border-radius: 8px;

  }

  a:hover::after{

    width: 80%;
    transition: width 500ms ease-in-out ;

  }

`

export const HeaderLogo = styled.div`

  padding: 0.5rem 3rem 0.5rem 1rem;

  img{

    width: 8rem;

  }

`

export const UserContainer = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;
  align-self: center;
  margin-left: 25rem;

  .user{

    width: 2rem;
    border-radius: 50%;

  }
  .arrow{
    
    width: 1rem;
    cursor: pointer;

  }


`