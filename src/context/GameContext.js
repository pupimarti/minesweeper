import React, { useState } from 'react';

const GameContext = React.createContext({});

export function GameContextProvider({ children }) {
  const [flags, setFlags] = useState([]);

  const [mines, setMines] = useState([]);

  const addFlag = ({ x, y }) => {
    setFlags((prevFlags) => [...prevFlags, { x, y }]);
  };

  const newMines = (new_mines) => setMines(new_mines);

  return (
    <GameContext.Provider value={{ flags, addFlag, mines, newMines }}>
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
