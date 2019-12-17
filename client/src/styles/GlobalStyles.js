import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body{
  margin: 0 auto;
  padding: 0;
  font-size: 16px;
  max-width: 1280px;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
}
body{
  position: relative;
}
`;

export default GlobalStyles;