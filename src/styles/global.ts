import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    outline: none;
    text-decoration: none;
  } 

  #root {
      margin: 0 auto;
      height: 100vh;
      width: 100vw;
  }
  
  html {
     font-family: sans-serif;
  }

  body {
    background-color: ${props => props.theme?.palette.secondary};
    margin: 0;
  }

`;

export default GlobalStyle;
