const { readMatchById } = require("../repo/readMatchById");

exports.findMatchById = async ({ id }) => {
  if (!id) {
    throw new Error("cannot find falsy id");
  }

  return readMatchById({ id });
};
