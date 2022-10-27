const { domain } = require("../authentication.domain.config");

const { loginEvent } = require("../events/loginEvent");

const { getDb } = require("../../../database");

const applyMetaData = (event) => ({
  ...event,
  meta: {
    created: new Date(),
    domain,
    id: event.payload.id,
  },
});

exports.createLoginEvent = async ({ agentId }) => {
  if (!agentId) {
    throw new Error("cannot login falsy agentId");
  }
  const event = loginEvent({ agentId });
  const eventWithMetaData = applyMetaData(event);
  const result = await getDb()
    .collection("events")
    .insertOne(eventWithMetaData);

  return result.insertedId;
};
