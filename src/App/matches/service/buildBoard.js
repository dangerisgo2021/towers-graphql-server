//give a matchConfig create a board which is an array of cells
// representing the 3d board

const { createCells } = require("./buildBoardFunctions/createCells");
const { mapCastles } = require("./buildBoardFunctions/mapCastles");
const {
  mapStartingPlayerPieces,
} = require("./buildBoardFunctions/mapStartingPlayerPieces");

exports.buildBoard = ({ matchConfig }) => {
  const {
    boardConfig,
    startingCastleConfig,
    startingPlayerConfig,
  } = matchConfig;
  const { width, height, maxTowerSize } = boardConfig;
  const cells = createCells({ width, height, maxTowerSize })
    .map(mapCastles({ castles: startingCastleConfig }))
    .map(
      mapStartingPlayerPieces({ startingPlayerPieces: startingPlayerConfig })
    );

  return {
    cells,
    width,
    height,
  };
};
