export const createBoard = (size = 10, quantityMines = 10) => {
  let new_board = [];
  for (let y = 0; y < size; y++) {
    let column = [];
    for (let x = 0; x < size; x++) {
      column.push({ value: 0, isMine: false, show: false, id: `${y}+${x}` });
    }
    new_board.push(column);
  }

  let mines = [];

  while (mines.length < quantityMines) {
    const y = Math.floor(Math.random() * size - 1) + 1;
    const x = Math.floor(Math.random() * size - 1) + 1;
    if (!new_board[y][x].isMine) {
      new_board[y][x].isMine = true;
      mines.push({ y, x });
    }
  }

  mines.forEach(({ x, y }) => {
    let index_y = y - 1;
    let index_x = x - 1;
    while (index_y <= y + 1) {
      if (index_y >= 0 && index_y < size) {
        while (index_x <= x + 1) {
          if (index_x >= 0 && index_x < size) {
            if (!new_board[index_y][index_x].isMine)
              new_board[index_y][index_x].value++;
          }
          index_x++;
        }
      }
      index_x = x - 1;

      index_y++;
    }
  });

  return new_board;
};
