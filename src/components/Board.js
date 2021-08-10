import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {createBoard} from '../utils/board';
import Cell from "./Cell";

export default function Board() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const new_board = createBoard();
    setBoard(new_board);
  }, []);

  return (
    <View>
      {Array.isArray(board) &&
        board.map((column, i) => (
          <View style={{ flexDirection: "row" }}>
            {column.map((cell, x) => (
              <Cell key={i + "-" + x} value={cell.value} isMine={cell.isMine} />
            ))}
          </View>
        ))}
    </View>
  );
}
