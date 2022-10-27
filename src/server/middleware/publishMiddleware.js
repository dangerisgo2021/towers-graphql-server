const { publish } = require("../../PubSub.js");

exports.publishMiddleware = (req, res) => {
  const { body: { message = {}, channel = "" } = {} } = req;

  try {
    console.log("PUBLISH_MESSAGE_RECEIVED", JSON.stringify({ body: req.body }));
    publish(channel, message).catch(console.error);
    console.log(
      "PUBLISH_MESSAGE_SUCCESS",
      JSON.stringify({ channel, id: message.id })
    );
  } catch (err) {
    console.error(
      "PUBLISH_MESSAGE_ERROR",
      JSON.stringify({ channel }),
      "error",
      err
    );
  }

  res.status(204).send();
};
