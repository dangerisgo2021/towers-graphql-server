const _ = require("lodash");
const { getDb } = require("../../database.js");

exports.getUserFromAccessTokenMiddleware = async (req, res, next) => {
  const authorization = _.get(req, "headers.authorization");
  console.log({ authorization });
  if (authorization) {
    try {
      const db = await getDb();
      const { userId } =
        (await db
          .collection("sessions")
          .findOne({ accessToken: authorization })) ?? {};

      req.user = userId;
      console.log("received userId", userId);
    } catch (err) {
      console.error("failed to user data");
      console.error(err.message);
    }
  }
  next();
};
