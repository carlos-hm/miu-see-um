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
  position: absolute;
    right: 5%;
    top: 28%;
};

.iconMap { 
  display: block;
  width: 35px;
  padding: 10px 0%;
  border: none;
  background-image: url("/ic-map.svg");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  text-indent: -9999px;
  position: absolute;
    right: 15%;
    top: 28%;
};

.iconBackMuseum { 
  display: block;
  width: 35px;
  padding: 10px 0%;
  border: none;
  background-image: url("/ic-arrow-back.svg");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  text-indent: -9999px;
  position: absolute;
    left: 5%;
    top: 28%;
  margin: 0;
};

.firstHall {
   margin: 24% 0 10%;
}

.editHallMus{
  margin-top: 0% !important;
}

`;



export default GlobalStyles;