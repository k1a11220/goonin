import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 100%;

    --white: #ffffff;

    --width: 1200px;


    body.light {
        --color-text: #1d1d1d;
    }

    body.dark {
        --color-text: #e6e6e6;
    }
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    min-height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    -webkit-font-smoothing: antialiased;
    background-color: #EBEBEB;
    margin: 0;

    * {
      color: var(--color-text);
      margin: 0;
      padding: 0;
    }
  }

  th {
    color: var(--white);
    font-weight: 400;
  }

  td {
    font-weight: 500;
  }

  th, td {
    padding: 15px 40px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    background-color: #326BBF;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  tr:nth-of-type(2n){
    background-color: #EBEDF2;
  }

  tr td:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  tr td:last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  tr th:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  tr th:last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  thead,
  tfoot {
    text-align: left;
  }
  
  :lang(ko) {
    word-break: keep-all; 
  }
`;

export default GlobalStyle;
