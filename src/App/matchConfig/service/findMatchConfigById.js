const { readMatchConfigById } = require("../repo/readMatchConfigById");

exports.findMatchConfigById = async ({ id }) => {
  if (!id) {
    throw new Error("cannot find falsy id");
  }
  return readMatchConfigById({ id });
};
