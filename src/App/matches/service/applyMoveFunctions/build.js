const { cloneDeep } = require("lodash");

exports.build = ({ board, move }) => {
  const newBoard = cloneDeep(board);
  // noinspection JSUnresolvedVariable
  const cell = newBoard.cells.find(({ id }) => id === move.cellId);
  if (cell && cell.size < cell.maxTowerSize) {
    cell.towerPieces[cell.size] = {
      ...cell.towerPieces[cell.size],
      type: "PLAYER",
      owner: move.player,
    };
    cell.size++;
    return newBoard;
  } else {
    return board;
  }
};
