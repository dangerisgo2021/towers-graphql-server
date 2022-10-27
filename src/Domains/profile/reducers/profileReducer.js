const { loginEvent } = require("../../authentication/events/loginEvent");

const { ReducerBuilder } = require("../../../utils/ReducerBuilder");
const profileReducerBuilder = new ReducerBuilder().addReducer(
  loginEvent.type,
  (state, event) => {
    console.log({ state, event });
    return {
      ...state,
      id: state.id || event.payload.agentId,
      agentId: state.agentId || event.payload.agentId,
      lastLoginDate: event.created,
    };
  }
);

exports.profileReducer = profileReducerBuilder.build();
exports.eventTypes = profileReducerBuilder.getActionsList();
