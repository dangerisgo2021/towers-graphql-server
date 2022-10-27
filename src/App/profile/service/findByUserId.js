const { findByUserId } = require("../repo/findByUserId");

exports.findByUserId = async ({ userId }) => await findByUserId({ userId });
