const { isNil } = require("lodash");
exports.calculateVictoryProgress = ({ board, victoryConfig }) => {
  const { castles, cells } = board;

  const playerToScoreMap = castles.reduce((acc, castle) => {
    const { cellId } = castle;
    const castleCell = cells.find(({ id }) => id === cellId);
    const controller = castleCell.towerPieces[castleCell.size - 1].owner;

    if (!isNil(controller)) {
      if (!acc[controller]) {
        acc[controller] = {
          castlesControlled: 0,
          castlesCrowned: 0,
        };
      }
      acc[controller].castlesControlled = acc[controller].castlesControlled + 1;
      if (castleCell.size === castleCell.maxTowerSize)
        acc[controller] = {
          ...acc[controller],
          castlesCrowned: acc[controller].castlesCrowned + 1,
        };
    }
    return acc;
  }, {});

  // winner is the key of the first winning entry.
  const [winner = null] =
    Object.entries(playerToScoreMap).find(
      ([_, { castlesControlled, castlesCrowned }]) =>
        castlesControlled >= victoryConfig.castlesToWin ||
        castlesCrowned >= victoryConfig.crownsToWin
    ) || [];

  return {
    ...playerToScoreMap,
    winner,
  };
};
