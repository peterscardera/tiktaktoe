import React from "react";
import Board from "./Board";
import Home from "./Home";
import styled from "styled-components";
import PlayerTurn from "./PlayerTurn";
import { IoIosArrowBack } from "react-icons/io";
import { StatusContext } from "./StatusContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GlobalStyles from "./GlobalStyles"


function App() {
  const { winState, setWinState } = React.useContext(StatusContext)
  return (
    <Router>
      <GlobalStyles/>
      
      <Switch>
        <Route exact path="/">
          <HomeContainer>
            <Home />
          </HomeContainer>
        </Route>
        <Route exact path="/game">
          <GameContainer>
            <StyledLink to="/">
              <StyledBack onClick={()=> {setWinState(!winState)}} GameStatus={winState} > <IoIosArrowBack/> Back to Player Select </StyledBack>
            </StyledLink>

            <Title> Tik Tac Toe</Title>
            <Board></Board>
            <PlayerTurn></PlayerTurn>
          </GameContainer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height:100vh;
  align-items: center;
  background-image: url("../simple.jpeg");
`;

const Title = styled.div`
  padding-bottom: 1rem;
  font-size: 4.5rem;
  font-family: "Indie Flower", cursive;
`;

const HomeContainer = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const StyledBack = styled.div`
display: flex;
color: yellow;
${prop => (prop.GameStatus ? `display:inline`: `display:none`)};
`;

const StyledLink = styled(Link)`
text-decoration: none;
`

