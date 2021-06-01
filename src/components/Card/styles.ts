import styled from 'styled-components';

export const CardContainer = styled.div`

  cursor: pointer;
  border-radius: 8px;


  .img__container{ 
  
    margin-bottom: 1rem;

    img{

      width: 100%;
      height: 7rem;
      border-radius: 8px;
    
    }

    .icons{

      margin: -3rem 5rem 0 1rem;

      img{

        border-radius: 50%;
        width: 2rem;
        height: 2rem;

      }

      img + img{

        margin-left: 1rem;

      }

    }
        
  }

  .name__container{

    display: flex;
    justify-content: space-between;

    h1{

      font-size: 18px;
      color: var(--primary-color);

    }

    img{

      height: 2rem;
      margin-right: -0.4rem;
      margin-top: -0.2rem;

    }

  }
  
  .description__container{

    display: flex;
    color: #555555;
    margin: 1rem 0;
    
    p{

      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.5px;

    }

    p + p{

      margin-left: 0.3rem;

    }

  }

  .item{

    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 14px;

    p{

      margin: 0.5rem 0 ;
      color: #555555;

    }

    & + .item{

      border-top: 1px dotted rgba(0,0,0,0.2);

    }

    h3{

      color: #555555;
      font-size: 14px;

    }

    &:last-child{

      border: none;
      p{
        
        color: #1baf6c;
        margin: -0.6rem 0 0;
        
      }

    }

    .total{

      display: flex;

      p + p{

        margin-left: 0.2rem;

      }

      p:nth-child(3){
        
        font-weight: bold;
        color: #1baf6c;

      }

    }

  }


`