const { cloneDeep, isNil } = require("lodash");
const { getCellByLocation } = require("./getCellByLocation");

const moveNameToDirectionMap = {
  PUSH_UP: { xDir: 0, yDir: -1 },
  PUSH_LEFT: { xDir: -1, yDir: 0 },
  PUSH_RIGHT: { xDir: 1, yDir: 0 },
  PUSH_DOWN: { xDir: 0, yDir: 1 },
};

const addPieceToTower = ({ cell, piece }) => {
  cell.towerPieces[cell.size].type = piece.type;
  if (!isNil(piece.owner)) {
    cell.towerPieces[cell.size].owner = piece.owner;
  }
  if (piece.type !== "EMPTY") {
    cell.size++;
  }
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
      // the bottom piece does move even if next cell has a size of 0
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

        if (nextCell) {
          // when current cell is >=  next cell size and we have a piece to move
          // next piece is placed on  the next cell and empty peice is place in current
          if (currentCell.size >= nextCell.size) {
            currentCell = nextCell;
            addPieceToTower({ cell: nextCell, piece: movingPiece });
          } else {
            // else place the piece on current cell
            addPieceToTower({ cell: currentCell, piece: movingPiece });
          }
        } else {
          //if no next cell place piece on current cell
          addPieceToTower({ cell: currentCell, piece: movingPiece });
        }
      }
    }
  });

  return newBoard;
};
