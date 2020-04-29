const { isEqual } = require("lodash");
exports.mapStartingPlayerPieces = ({ startingPlayerPieces }) => (cell) => {
  const cellStartingPieces = startingPlayerPieces.find(({ location }) =>
    isEqual(location, cell.location)
  );
  return cellStartingPieces
    ? {
        ...cell,
        towerPieces: cell.towerPieces.map((towerPiece, i) => {
          return i < cellStartingPieces.size
            ? {
                ...towerPiece,
                type: "PLAYER",
                owner: cellStartingPieces.player,
              }
            : towerPiece;
        }),
        size: cellStartingPieces.size,
      }
    : cell;
};
