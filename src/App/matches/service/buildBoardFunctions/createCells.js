const { createCell } = require("./createCell");

exports.createCells = ({ width, height, maxTowerSize }) =>
  Array.from({ length: width * height }).map((_, i) =>
    createCell({
      location: { x: i % width, y: Math.floor(i / height) },
      maxTowerSize,
    })
  );
