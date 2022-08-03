import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
    text-rendering: optimizeLegibility;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration:none;
    color:#53b3cb;
  }
  html, body, #root {
    height: 100%;
    width:100%;
    color: #000;
    font-size:16px;
  }
`
export default GlobalStyle