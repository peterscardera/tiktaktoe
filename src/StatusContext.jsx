import React, { useState } from "react";

export const StatusContext = React.createContext();

export const StatusProvider = ({ children }) => {
  const [player, setPlayer] = useState(true);
  const [winState, setWinState] = useState(false);
  let bool = player ? "X" : "O";

  return (
    <StatusContext.Provider
      value={{ bool, player, setPlayer, winState, setWinState }}
    >
      {children}
    </StatusContext.Provider>
  );
};
