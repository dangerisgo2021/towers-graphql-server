exports.getCellByLocation = ({ board, location }) => {
  const { x, y } = location;
  const { cells, width, height } = board;
  if (x < width && y < height && x >= 0 && y >= 0) {
    return cells[y * width + x];
  } else {
    return undefined;
  }
};
