import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
