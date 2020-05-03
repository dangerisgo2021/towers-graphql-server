const { isEqual } = require("lodash");
const { readMatchById } = require("../repo/readMatchById");
const { updateMatchMove } = require("../repo/updateMatchMove");
const { build } = require("./applyMoveFunctions/build");
const { push } = require("./applyMoveFunctions/push");

const applyMoveToBoard = ({ board, move }) => {
  // noinspection FallThroughInSwitchStatementJS
  switch (move.name) {
    case "BUILD": {
      return build({board, move});
    }
    case "PUSH_UP":
    case "PUSH_DOWN":
    case "PUSH_LEFT":
    case "PUSH_RIGHT": {
      return push({ board, move });
    }
    default: {
      console.error("unknown move");
      return board;
    }
  }
};

exports.applyMove = async ({ matchId, move }) => {
  //read match by id
  const match = await readMatchById({ id: matchId });

  // get copy of current board
  const { board, moves } = match;
  // board update with build or push move applied
  const newBoard = applyMoveToBoard({ board, move });
  const boardChanged = !isEqual(board, newBoard);
  
  if(!boardChanged) {
    throw new Error("Invalid Move - Board Didnt change")
  }
  //validate that board changed from move
  return updateMatchMove({
    matchId,
    moves: [...moves, move],
    board: newBoard,
  });

};
