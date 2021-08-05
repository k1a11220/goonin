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
  
  :lang(ko) {
    word-break: keep-all; 
  }
`;

export default GlobalStyle;