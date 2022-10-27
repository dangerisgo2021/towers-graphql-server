const { readById } = require("../repo/readById");

exports.readProfileById = ({ id }) => readById({ id });