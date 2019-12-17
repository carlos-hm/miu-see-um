import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body{
  height: 85vh;
  margin: 0 auto;
  padding: 0;
  font-size: 16px;
  max-width: 1280px;
  font-family: 'Montserrat', sans-serif;
}
body{
  position: relative;
};
.icon { 
  display: block;
  width: 30px;
  padding: 5px 0%;
  background-image: url("/ic-mode-edit.svg");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  text-indent: -9999px;
  position: absolute;
    right: 2%;
    top: 24%;
};
`;


export default GlobalStyles;