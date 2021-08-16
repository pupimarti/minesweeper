import React, { useState } from 'react';
import { createBoard } from '../utils/board';
import { STATE_GAME } from '../utils/constraints';

const GameContext = React.createContext({});

export function GameContextProvider({ children }) {
  const [flags, setFlags] = useState([]);

  const [mines, setMines] = useState([]);

  const [stateGame, setStateGame] = useState(STATE_GAME.STOP);

  const [board, setBoard] = useState([]);

  const [shows, setShows] = useState([]);

  const [size, setSize] = useState(5);

  const [quantityMines, setQuantityMines] = useState(5);

  const addFlag = ({ x, y }) => {
    setFlags((prevFlags) => [...prevFlags, { x, y }]);
  };

  const removeFlag = ({ x, y }) => {
    setFlags((prevFlags) =>
      prevFlags.filter((flag) => {
        return flag.x === x && flag.y === y ? false : true;
      })
    );
  };

  const newMines = (new_mines) => setMines(new_mines);

  const newBoard = () => {
    const newGame = createBoard(size, quantityMines);
    setBoard(newGame.board);
    newMines(newGame.mines);
  };

  const resetGame = () => {
    newBoard();
    setFlags([]);
    setShows([]);
    setStateGame(STATE_GAME.STOP);
  };

  const startGame = () => {
    setStateGame(STATE_GAME.PLAY);
  };

  const winGame = () => {
    setStateGame(STATE_GAME.WIN);
    alert('Ganaste!');
  };

  const addShows = (arr_shows) => {
    setShows((prevShows) => {
      const new_shows = [...prevShows, ...arr_shows];
      const totalCells = board.length * board.length;
      const totalShows = new_shows.length;
      const totalMines = mines.length;
      console.log(totalCells - totalMines - totalShows);
      if (totalCells - totalMines - totalShows <= 0) winGame();

      return new_shows;
    });
  };

  return (
    <GameContext.Provider
      value={{
        flags,
        addFlag,
        mines,
        newMines,
        removeFlag,
        stateGame,
        setStateGame,
        board,
        setBoard,
        startGame,
        newBoard,
        resetGame,
        winGame,
        shows,
        setShows,
        addShows,
        size,
        setSize,
        quantityMines,
        setQuantityMines,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
