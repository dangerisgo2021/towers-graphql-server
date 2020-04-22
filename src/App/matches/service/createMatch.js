const { insertMatch } = require("../repo/insertMatch");

exports.createMatch = async (createMatchInput) =>
    insertMatch({
      moves: [],
      completed: false,
      ...createMatchInput,
      created: new Date().getTime(),
    });
