import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root{

    --primary-color: #151926;
    --secondary-color: #e9403c;
    --text-gray: #777777;

  }

  *{

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  //font-size padrão 16px
  html{

    @media(max-width: 1080px){

      font-size: 93.75%;//15px

    }
    @media(max-width: 720px){

      font-size: 87.5%;//14px

    }

  }

  //REM - Adaptar interface

  body{

    background: var(--background);
    --webkit-font-feature-smoothing: antialiased;

  }

  body, input, textarea, button{

    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;

  }

  input,textarea,select{

    border-radius: 8px;

  }

  h1, h2, h3, h4, h5, h6, strong{

    font-weight: 600;

  }

  button{

    cursor: pointer;

  }

  [disabled]{

    opacity: 0.6;
    cursor: not-allowed;

  }


` 