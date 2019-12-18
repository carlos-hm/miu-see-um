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

.iconEditHall { 
  display: block;
  width: 25px;
  padding: 5px 0%;
  background-image: url("/ic-mode-edit.svg");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  text-indent: -9999px;
};

.iconAddArt { 
  display: block;
  width: 25px;
  padding: 5px 0%;
  margin: 0 7px;
  background-image: url("/ic-add-circle.svg");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  text-indent: -9999px;
};

.iconDeleteHall { 
  display: block;
  width: 35px;
  padding: 10px 0%;
  border: none;
  background-image: url("/ic-delete.svg");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  text-indent: -9999px;
};

.iconBack { 
  display: block;
  width: 35px;
  padding: 10px 0%;
  border: none;
  background-image: url("/ic-arrow-back.svg");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  text-indent: -9999px;
};

.iconDetail { 
  display: block;
  width: 35px;
  padding: 10px 0%;
  border: none;
  background-image: url("/ic-info-outline.svg");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  text-indent: -9999px;
};

.firstHall {
      margin: 24% 0 10%;
    }

`;


export default GlobalStyles;