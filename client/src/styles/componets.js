import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: red;
`;

export const MuseumCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: auto;
    margin: 5% auto;
    border-radius: 10px;
    box-sizing: border-box;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  & img {
    width: 90%;
    height: 150px;
    margin: 5% auto;
    display: block;
    object-fit: cover;
  }
  & div {
    width: 90%;
    margin: 0% auto;
    padding-bottom: 5%;
  }
  & h2 {
    width: 100%;
    margin: 0 0 0 0;
    color: rgba(0,0,0,0.87);
  } 
  a {
    text-decoration: none;
  }
  & small{
    width: 100%;
    color: rgba(0,0,0,0.54);
    font-size: 1.1em;
  }
`;

export const MuseumDetail = styled.div`
  width: 90%;
  margin: 0% auto;
  & img {
    width: 100%;
    height: 200px;
    margin: 5% auto;
    object-fit: cover;
  };
  & p:first-of-type {
    padding-top: 5%;
    color:rgba(0,0,0,0.87);
    border-top: solid thin rgba(0,0,0,0.54);
  } 
  & p {
    color: rgba(0,0,0,0.54);
  }
  & table {
    width: 60%;
    & td:nth-child(1) {
      padding: 1% 0;
      color: rgba(0,0,0,0.54);
    }
  }

`;

export const Hall = styled.div`
  width: 100%;
  margin-top: 10%;
  & h2 {
    margin-left: 4%;
  }
  & div {
    width: 100%;
    padding: 2%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex-flow: flex-wrap;
    & a {
    width: 46%;
    margin: 2%;
    }
    img { 
    width: 100%;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    }
  }
`;

export const ArtworkDetail = styled.div`
  width: 100%;
  & img {
    width: 90%;
    height: 300px;
    margin: 0 auto;
    display: block;
    object-fit: cover;
  }
  & div {
    width: 90%;
    margin: 0 auto;
    margin-top: 5%;
    padding-top: 5%;
    border-top: solid thin rgba(0,0,0,0.54);
    & h2 {
      font-size: 2em;
    }; 
    & small {
      font-size: 1.2em;
      color: rgba(0,0,0, 0.54)
    }
  }
`;

export const MapStyled = styled.figure` 
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  & img {
    width: 100%;
    padding: 5%;
    box-sizing: border-box;
  }
`;