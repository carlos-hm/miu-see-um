import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: red;
`;

export const StyledNav = styled.nav`
  width: 100vw;
  position: fixed;
  top: 0px;
  background-color: white;
  & figure {
    width: 20%;
    display: flex;
    align-items: center;
    & img:first-child {
      width: 30%;
      padding-right: 8%;
      border-right: solid medium rgba(0,0,0,0.87);
    };
    & img {
      width: 40%;
      margin: 2% 5%;
    }
  }

`

export const MuseumCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: auto;
    margin: 10% auto;
    box-sizing: border-box;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  & img {
    width: 100%;
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
  & h3 {
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
    margin: 3% auto 0%;
    display: block;
  }
`;

export const MuseumDetail = styled.div`
  width: 90%;
  margin: 5% auto 0%;
  & img {
    width: 100%;
    height: 300px;
    margin: 2% auto;
    object-fit: cover;
  };
  & p:first-of-type {
    padding-top: 5%;
    color:rgba(0,0,0,0.87);
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
    margin-right: 51%;
  }
  & article {
    display: flex;
    justify-content: flex-start;
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

export const UserDashboard = styled.div`
  width: 100%;
  height: 80vh;
  margin: 10% auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  & section:first-child {
    width: 60%;
    height: 84vh;
  }
  & section {
    width: 35%;
    height: 84vh;
    overflow: scroll;
    & aside.halls {
      margin: 0;
      width: 35%;
    }
    & aside {
      width: 54%;
      margin-left: 3%;
      position: fixed;
      background-color: white;
      border-bottom: solid 1px #707070;
      padding-bottom: 10px;
    }
    article {
      margin-top: 16%;
    }
  }
`;

export const EditView = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  & section:first-child {
    width: 30%;
  };
  & section {
    width: 60%;
    & form {
      width: 100%;
      & input {
        font-family: 'Montserrat',sans-serif;
        width: 90%;
        margin: 2% 0;
        padding: 1% 0% 1% 2%;
        font-size: 1.2em;
        border: none;
        border-bottom: solid 1px #707070;
      };
      & button {
        font-family: 'Montserrat',sans-serif;
        display: flex;
        align-self: flex-end;
        padding: 2% 5%;
        background-color: #00A5A8;
        color: white;
        border: none;
        font-size: 1.3em;
        font-weight: bold;
      }
    }
  } 
`;

export const EditAside = styled.aside`
  width: 96%;
  margin: 5% auto 0;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #707070;
  & h3 {
    margin-left: 2%;
    width: 90%;
  }
`