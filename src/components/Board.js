import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import GameContext from '../context/GameContext';
import { createBoard, pressEmptyCell } from '../utils/board';
import { STATE_GAME } from '../utils/constraints';
import Cell from './Cell';

export default function Board({ gameOver }) {
  const { mines, newBoard, stateGame, board, setBoard, startGame, addShows } =
    useContext(GameContext);

  useEffect(() => {
    newBoard();
  }, []);

  const handlePressLongCell = () => {
    if (stateGame === STATE_GAME.STOP) startGame();
  };

  const handlePressCell = ({ id, value, isMine, x, y }) => {
    if (stateGame === STATE_GAME.PLAY || stateGame === STATE_GAME.STOP) {
      if (stateGame === STATE_GAME.STOP) startGame();
      if (value === 0 && !isMine) {
        const { new_board, shows } = pressEmptyCell({ x, y }, board);
        setBoard(new_board);
        addShows(shows);
        return;
      }
      setBoard((prevBoard) => {
        let new_board = [...prevBoard];
        new_board[y][x] = { ...new_board[y][x], show: true };
        return new_board;
      });
      if (isMine) handleGameOver();
      else addShows([{ x, y }]);
    }
  };

  const handleGameOver = () => {
    mines.forEach(({ x, y }) => {
      setBoard((prevBoard) => {
        let new_board = [...prevBoard];
        new_board[y][x].show = true;
        return new_board;
      });
    });
    gameOver();
  };

  return (
    <View>
      {Array.isArray(board) &&
        board.map((column, i) => (
          <View key={i} style={{ flexDirection: 'row' }}>
            {column.map((cell) => (
              <Cell
                onPress={() => handlePressCell(cell)}
                onLongPress={() => handlePressLongCell(cell)}
                key={cell.id}
                value={cell.value}
                isMine={cell.isMine}
                show={cell.show}
                x={cell.x}
                y={cell.y}
                stateGame={stateGame}
              />
            ))}
          </View>
        ))}
    </View>
  );
}
