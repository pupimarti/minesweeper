export const createBoard = () => {
  let new_board = [[]];
  for (let i = 0; i < 10; i++) {
    let column = [];
    for (let x = 0; x < 10; x++) {
      column.push({ value: 0, isMine: false });
    }
    new_board.push(column);
  }
  return new_board;
};