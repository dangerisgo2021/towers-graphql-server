exports.selectedCells = (parent) =>
  parent.selectedCells
    ? Object.entries(parent.selectedCells).map(([key, value]) => ({
        player: key,
        cellId: value,
      }))
    : [];
