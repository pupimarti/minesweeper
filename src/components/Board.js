import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { createBoard, pressEmptyCell } from '../utils/board';
import Cell from './Cell';

export default function Board() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    startNew();
  }, []);

  const startNew = () => {
    const new_board = createBoard();
    setBoard(new_board);
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
    if (isMine) {
      Alert.alert('Perdiste.');
      startNew();
    }
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
