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
    object-fit: cover;
  }
  & div {
    width: 90%;
    margin: 0% auto;
    padding-bottom: 5%;
  }
  & h2 {
    width: 100%;
    margin: 0 0 2% 0;
  }
  & small{
    width: 100%;
    color: rgba(0,0,0,0.54);
    font-size: 1.1em;
  }
`;

