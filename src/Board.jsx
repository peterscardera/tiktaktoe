import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Square from "./Square";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { StatusContext } from "./StatusContext";

//the board componant will be the whole board which will have each box as a componant

const Board = () => {
  const { bool, player, setPlayer, winState, setWinState } = React.useContext(
    StatusContext
  );
  //our initial Array of nulls
  const [boardSquare, setBoardSquare] = useState(Array(9).fill(null));
  //we need a state that tracks who is human and who is computer



  //once player is record either Xor 0  we need to change the variable from book to playerChoice
  // we must then also let the computer be the opposite to inject its opposite into the board

  // const [drawState, setDrawState] = useState(false);

  useEffect(() => {
    const WINNING_COMBINATIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];

    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [a, b, c] = WINNING_COMBINATIONS[i];

      // if boardSquare[a] means if truthy then moves on to the next line. We cant just do === all around like boardSquare[a]  === boardSquare[b] == boardSquare[c]
      if (
        boardSquare[a] &&
        boardSquare[a] === boardSquare[b] &&
        boardSquare[b] === boardSquare[c] &&
        winState === false
      ) {
        //if theres a win, Set the game state to true as theres a winner
        setWinState(!winState);
        //window.alert(`Player ${!player ? "X" : "O"} Wins!`);
      }
    }
  });

  const clickHandler = index => {
    //copy the board to able to mutate it
    let copyBoard = [...boardSquare];
    //assigning X or O only if previous value is null. To avoid overriding value
    if (copyBoard[index] === null && winState === false) {
      copyBoard[index] = bool;

      setPlayer(!player);
    }
    //changing the origanl state (array) with the mutate version
    setBoardSquare(copyBoard);
  };
  //handle snackbar close

  //----------------------------RETURN RENDER --------------------
  return (
    <React.Fragment>
      <StyledDiv>
        {boardSquare.map((sqrs, index) => {
          return (
            <Square
              value={sqrs}
              squareIndex={index}
              clickHandler={clickHandler}
            ></Square>
          );
        })}
      </StyledDiv>
      <Snackbar open={winState} autoHideDuration={1000}>
        <Alert severity="success">Player {!player ? "X" : "O"} Wins! </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Board;

const StyledDiv = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    font-size: 2rem;
    height: 130px;
    width: 230px;
  }
`;
