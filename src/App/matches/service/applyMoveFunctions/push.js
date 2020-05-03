const { cloneDeep, isNil } = require("lodash");
const { getCellByLocation } = require("./getCellByLocation");

const moveNameToDirectionMap = {
  PUSH_UP: { xDir: 0, yDir: -1 },
  PUSH_LEFT: { xDir: -1, yDir: 0 },
  PUSH_RIGHT: { xDir: 1, yDir: 0 },
  PUSH_DOWN: { xDir: 0, yDir: 1 },
};

exports.push = ({ board, move }) => {
  const newBoard = cloneDeep(board);
  const { cells } = newBoard;
  // noinspection JSUnresolvedVariable
  const pushedCell = cells.find(({ id }) => id === move.cellId);
  const movingPieces = cloneDeep(pushedCell.towerPieces);
  const { xDir, yDir } = moveNameToDirectionMap[move.name];
  let currentCell = pushedCell;

  movingPieces.forEach((movingPiece, index) => {
    if (movingPiece.type !== "EMPTY") {
      if (index === 0) {
        currentCell.towerPieces.forEach((piece, i) => {
          if (i === 0) {
            piece.type = movingPiece.type;
            if (!isNil(movingPiece.owner)) {
              piece.owner = movingPiece.owner;
            }
          } else {
            piece.type = "EMPTY";
            delete piece.owner;
          }
        });
        currentCell.size = 1;
      } else {
        const xN = currentCell.location.x + xDir;
        const yN = currentCell.location.y + yDir;
        const nextCell = getCellByLocation({
          board: newBoard,
          location: { x: xN, y: yN },
        });
        if (nextCell && currentCell.size >= nextCell.size) {
          currentCell = nextCell;
          nextCell.towerPieces[nextCell.size].type = movingPiece.type;
          if (!isNil(movingPiece.owner)) {
            nextCell.towerPieces[nextCell.size].owner = movingPiece.owner;
          }
          nextCell.size++;
        } else {
          currentCell.towerPieces[currentCell.size].type = movingPiece.type;
          if (!isNil(movingPiece.owner)) {
            nextCell.towerPieces[currentCell.size].owner = movingPiece.owner;
          }
          currentCell.size++;
        }
      }
    }
  });

  return newBoard;
};
