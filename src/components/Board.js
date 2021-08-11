import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { createBoard } from '../utils/board';
import Cell from './Cell';

export default function Board() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const new_board = createBoard();
    setBoard(new_board);
  }, []);

  const handlePressCell = (id) => {
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
  };

  return (
    <View>
      {Array.isArray(board) &&
        board.map((column, i) => (
          <View key={i} style={{ flexDirection: 'row' }}>
            {column.map((cell) => (
              <Cell
                onPress={() => handlePressCell(cell.id)}
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
