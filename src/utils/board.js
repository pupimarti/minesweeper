export const createBoard = (size = 5, quantityMines = 5) => {
  let board = [];
  for (let y = 0; y < size; y++) {
    let column = [];
    for (let x = 0; x < size; x++) {
      column.push({
        value: 0,
        isMine: false,
        show: false,
        id: `${y}+${x}`,
        x,
        y,
      });
    }
    board.push(column);
  }

  let mines = [];

  while (mines.length < quantityMines) {
    const y = Math.floor(Math.random() * size - 1) + 1;
    const x = Math.floor(Math.random() * size - 1) + 1;
    if (!board[y][x].isMine) {
      board[y][x].isMine = true;
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
            if (!board[index_y][index_x].isMine)
              board[index_y][index_x].value++;
          }
          index_x++;
        }
      }
      index_x = x - 1;

      index_y++;
    }
  });

  return { board, mines };
};

export const pressEmptyCell = ({ x, y }, board) => {
  let new_board = [...board];

  let empty_list = [{ x, y }];

  let shows = [];

  while (empty_list.length > 0) {
    const cell_empty = empty_list.pop();
    let index_y = cell_empty.y - 1;
    let index_x = cell_empty.x - 1;
    while (index_y <= cell_empty.y + 1) {
      if (index_y >= 0 && index_y < board.length) {
        while (index_x <= cell_empty.x + 1) {
          if (index_x >= 0 && index_x < board.length) {
            const cell = new_board[index_y][index_x];
            if (!cell.isMine && cell.value === 0 && !cell.show) {
              cell.show = true;
              shows.push(cell);
              empty_list.push({ x: index_x, y: index_y });
            } else if (!cell.isMine && !cell.show) {
              cell.show = true;
              shows.push(cell);
            }
          }
          index_x++;
        }
      }
      index_x = cell_empty.x - 1;

      index_y++;
    }
  }

  return { new_board, shows };
};
