const { isEqual } = require("lodash");
exports.mapCastles = ({ castles }) => (cell) => {
  const castle = castles.find(({ location }) =>
    isEqual(location, cell.location)
  );

  return castle
    ? {
        ...cell,
        isCastle: true,
        towerPieces: cell.towerPieces.map((towerPiece, i) => {
          return i < castle.size
            ? { ...towerPiece, type: "CASTLE" }
            : towerPiece;
        }),
        size: castle.size,
      }
    : cell;
};
