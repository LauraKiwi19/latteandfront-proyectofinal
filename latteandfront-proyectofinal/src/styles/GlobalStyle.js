import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

    *{
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
    }

    body, html{
      height:100%;
      box-sizing: border-box;
    }

    li{
      list-style: none;
    }
`;


export default GlobalStyle;