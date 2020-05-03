exports.reset = (boardFactory) => () => {
  return boardFactory();
};
