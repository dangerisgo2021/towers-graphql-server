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
          player: controller,
          castles: 0,
          crowns: 0,
        };
      }
      acc[controller].castles = acc[controller].castles + 1;
      if (castleCell.size === castleCell.maxTowerSize)
        acc[controller] = {
          ...acc[controller],
          crowns: acc[controller].crowns + 1,
        };
    }
    return acc;
  }, {});
  const playerToVictoryProgressEntries = Object.entries(playerToScoreMap);
  // winner is the key of the first winning entry.
  console.log({ victoryConfig });
  const [winner = null] =
    playerToVictoryProgressEntries.find(
      ([_, { castles, crowns }]) =>
        castles >= victoryConfig.castlesToWin ||
        crowns >= victoryConfig.crownsToWin
    ) || [];
  console.log({ winner });

  const playerProgress = playerToVictoryProgressEntries.map(([key, value]) => ({
    player: key,
    ...value,
  }));
  return {
    playerProgress,
    winner,
  };
};
