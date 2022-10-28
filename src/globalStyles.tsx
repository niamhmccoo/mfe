import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'f37_jagger', 'Helvetica', sans-serif;
    font-size: var(--remFontSize);
    line-height: 1.5;
    color: var(--fg);
    background-color: var(--bg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    touch-action: manipulation;
  }

  body {
    margin: 0;
    overflow-x: hidden;
  }

  input,
  textarea,
  select,
  button {
    font-family: inherit;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button:focus,
  a:focus {
    outline: none;
    box-shadow: none;
    border-color: transparent;
  }

  figure {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: normal;
    touch-action: manipulation;
  }

  p {
    margin-top: 0;
  }
`;

export default GlobalStyles;
