import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 100%;
    --white: #ffffff;
    --width: 700px;
    --modal-width: 500px;
    --main-radius: 25px;
    --card-radius: 16px;
    --top-padding: 64px;
    --side-padding: 40px;

    --page-margin: 24px;

    --page-padding: 32px;

    @media (max-width: 1200px) {
      --width: 95%
    }

    @media (max-width: 830px) {
      --main-radius: 0;
      --top-padding: 56px;
      --side-padding: 20px;
      --width: 100%;
      --page-margin: 0;

      --page-padding: 16px;
    }

    @media (max-width: 540px) {
      --modal-width: 94%;
    }


    body.light {
        --color-text: #1d1d1d;
        --color-text-1: #ffffff;
        --color-text-2: #4191FD;
        --color-text-3: #c1c1c1;
        --color-text-4: #5b5b5b;
        --bg-color: rgba(246, 246, 246, 0.5);
        --card-color: #ffffff;
        --card-color-1: #F8F8F8;
        --card-color-2: #ffffff;
        --border: #cacaca;
        --highlight-color: #326BBF;
    }

    body.dark {
        --color-text: #e6e6e6;
        --color-text-1: #62B1FF;
        --color-text-2: #3282B8;
        --color-text-3: #5b5b5b;
        --color-text-4: #e6e6e6;
        --bg-color: #121212;
        --card-color: #1c1c1c;
        --card-color-1: #2c2c2c;
        --card-color-2: #1c1c1c;
        --border: rgba(207, 207, 207, 0.2);
        --highlight-color: #203E5C;
    }
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    min-height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg-color);
    margin: 0;
    transition: all 0.2 ease-in-out;

    * {
      color: var(--color-text);
      margin: 0;
      padding: 0;
      transition: background 0.2s ease-in-out;
    }
  }

  th {
    color: var( --color-text-1);
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
    background-color: var(--highlight-color);
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  tr:nth-of-type(2n){
    background-color: var(--card-color-1);
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
