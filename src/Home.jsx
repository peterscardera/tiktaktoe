import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { StatusContext } from "./StatusContext";

const Home = () => {
  const { player, setPlayer } = React.useContext(StatusContext);
  return (
    <Container>
      <StyledTitle> Player: </StyledTitle>

      <StyledButtonOne
        onClick={() => {
          setPlayer(true);
        }}
        //***PASSING THE CONTEXT STATE OF TRUE OR FALSE from Status context so that in styled components we could consume as well */
        currentPlayer={player}
      >
        X
      </StyledButtonOne>
      <StyledButtonTwo
        onClick={() => {
          setPlayer(false);
        }}
        currentPlayer={player}
      >
        O
      </StyledButtonTwo>
      <StyledLink to="/game">
        <StartButton> START </StartButton>
      </StyledLink>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;

  
`;

const StyledTitle = styled.div`
  margin-bottom: 20px;
  font-family: "Baloo Da 2", cursive;
  font-size: 3.5rem;
`;

const StyledButtonOne = styled.button`
  outline: none;
  cursor: pointer;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
  background: none;
  border: none;
  /* console.log props and we get everything from the parent StyledButton including the onClick functions */
  ${prop => (prop.currentPlayer ? `color: yellow;` : `color:black`)}
`;

const StyledButtonTwo = styled.button`
  outline: none;
  cursor: pointer;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
  background: none;
  border: none;
  /* console.log props and we get everything from the parent StyledButton including the onClick functions */
  ${prop => (!prop.currentPlayer ? `color: yellow;` : `color: black`)}
`;

const StartButton = styled.button`
  cursor: pointer;
  height: 50px;
  background: Black;
  border: none;
  outline: none;
  color: ivory;
  font-weight: 400;
  font-size: 1.5rem;
  border-radius: 8px;

  &:hover {
    background-color: lightgrey;
    color: black;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

