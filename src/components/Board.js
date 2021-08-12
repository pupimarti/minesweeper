import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { createBoard, pressEmptyCell } from '../utils/board';
import Cell from './Cell';

export default function Board() {
  const [board, setBoard] = useState([]);

  const [mines, setMines] = useState([]);

  useEffect(() => {
    startNew();
  }, []);

  const startNew = () => {
    const newGame = createBoard();
    setBoard(newGame.board);
    setMines(newGame.mines);
  };

  const handlePressCell = ({ id, value, isMine, x, y }) => {
    if (value === 0 && !isMine) {
      const new_board = pressEmptyCell({ x, y }, board);
      setBoard(new_board);
      return;
    }
    setBoard((prevBoard) => {
      let new_board = [...prevBoard];
      return new_board.map((columns) =>
        columns.map((cell) => {
          if (cell.id === id) {
            return { ...cell, show: true };
          } else return cell;
        })
      );
    });
    if (isMine) handleGameOver();
  };

  const handleGameOver = () => {
    mines.forEach(({ x, y }) => {
      setBoard((prevBoard) => {
        let new_board = [...prevBoard];
        new_board[y][x].show = true;
        return new_board;
      });
    });
  };

  return (
    <View>
      {Array.isArray(board) &&
        board.map((column, i) => (
          <View key={i} style={{ flexDirection: 'row' }}>
            {column.map((cell) => (
              <Cell
                onPress={() => handlePressCell(cell)}
                key={cell.id}
                value={cell.value}
                isMine={cell.isMine}
                show={cell.show}
              />
            ))}
          </View>
        ))}
    </View>
  );
}
