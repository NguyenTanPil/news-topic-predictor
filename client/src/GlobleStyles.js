import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    background-color: #f3f3f3;
    box-sizing: border-box;
    color: #919191;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
