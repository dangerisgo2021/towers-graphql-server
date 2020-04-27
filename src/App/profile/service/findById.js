const { findById } = require("../repo/findById");

exports.findById = async ({ id }) => await findById({ id });
