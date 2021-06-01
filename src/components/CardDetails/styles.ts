import styled from 'styled-components';

export const CardDetailsContainer = styled.div`

max-width: 1120px;
  margin: 1rem auto;

  .headerDetails{

    display: flex;
    font-size: 14px;
    color: var(--text-gray);
    p + p{

      margin-left: 0.5rem;

    }
    margin-bottom: 2rem;

  }

  .contentDetails{

    display: grid;
    grid-template-columns: 35% 1fr;
    gap: 5rem;

    .image{

      img{

        width: 100%;
        border-radius: 16px;
        margin-bottom: 2rem;
  
      }
  
      h2{
  
        font-size: 20px;
        color: #333333;
        margin-bottom: 1rem;
  
      }
      
      p{
  
        font-size: 14px;
        color: var(--text-gray);
  
      }
      
      p + p{
  
        margin-bottom: 1rem;
  
      }
  
      button{
  
        border: none;
        text-decoration: underline;
        color: var(--secondary-color);
  
      }

    }

    .content{

      h1{

        margin-bottom: 0.4rem;

      }

      .address{

        display: flex;
        color: var(--text-gray);
        margin-bottom: 0.5rem;

        p+p{

          margin-left: 0.5rem;

        }

      }

      .apt{

        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;

        .description{

          display: flex;

          align-items: center;

          p{

            font-weight: bold;
            font-size: 14px;

          }

          p+p{

            margin-left: 0.4rem;

          }

        }

        .status{

          margin-right: 2rem;
          color: white;
          background-color: #1baf6c;
          padding: 0.5rem 1rem;
          border-radius: 16px;

        }

      }

      .cards{

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        text-align: center;
        margin-bottom: 2rem;

        .card{

          border: 1px solid rgba(0,0,0,0.2);
          border-radius: 8px;

          p{

            margin: 0.5rem 0;
            color: var(--text-gray);
            font-weight: bold;
            font-size: 14px;
            
          }

          .cardDetails{

            display: flex;
            margin: 0 2rem;
            align-items: center;

            img{

              height: 2rem;
              margin-right: 1rem;

            }

            p{

              font-size: 20px;


            }

          }

        }

      }

      .beds{

        margin-bottom: 3rem;

        h2{

          font-size: 18px;
          margin-bottom: 3em;

        }

        .bedsContent{

          ul{

            display: grid;
            grid-template-columns: 1fr 1fr;

            span{

              font-weight: bold;

            }

          }

        }

      }

      .rules{

        margin-bottom: 2rem;

        h2{

          font-size: 18px;
          margin-bottom: 1rem;

        }

        .rulesContent{

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;

          .rulesItem{

            display: flex;
            align-items: center;
            
            p{

              font-size: 14px;
              color: #444444;
              margin-right: 0.5rem;

            }
            
            .sim{

              font-size: 14px;
              background-color: #1baf6c;
              color: white;
              padding: 2px 0.5rem;
              border-radius: 8px;

            }

            .nao{

              font-size: 14px;
              background-color: var(--secondary-color);
              color: white;
              padding: 2px 0.5rem;
              border-radius: 8px;

            }

          }


        }

        button{

          border: none;
          color: var(--secondary-color);
          font-size: 14px;

        }

      }

      .comodidades{

        margin-bottom: 2rem;

        h2{

          font-size: 18px;
          margin-bottom: 1rem;

        }

        ul{

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          list-style-position: inside;
          color: #444444;

          .item{

            display: flex;
            align-items: center;
            
            .sim{

              margin-left: 0.5rem;
              font-size: 14px;
              background-color: #1baf6c;
              color: white;
              padding: 2px 0.5rem;
              border-radius: 8px;

            }

            .nao{

              margin-left: 0.5rem;
              font-size: 14px;
              background-color: var(--secondary-color);
              color: white;
              padding: 2px 0.5rem;
              border-radius: 8px;

            }

          }

        }

      }

    }

  }


`