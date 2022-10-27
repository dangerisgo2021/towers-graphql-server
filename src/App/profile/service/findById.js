const { findById } = require("../repo/findById");

exports.findById = ({ id }) => findById({ id });
