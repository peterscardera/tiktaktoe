import React, { useState } from "react";


//tracks whos turn it is and if the game is in a win state. 

export const StatusContext = React.createContext();

export const StatusProvider = ({ children }) => {
  //state of of player. True is X by default 
  const [player, setPlayer] = useState(true);
  const [winState, setWinState] = useState(false);

  const [choice, setChoice] = useState("")

  let bool = player ? "X" : "O";



  // console.log(bool, player)

  return (
    <StatusContext.Provider
      value={{ bool, player, setPlayer, winState, setWinState }}
    >
      {children}
    </StatusContext.Provider>
  );
};
