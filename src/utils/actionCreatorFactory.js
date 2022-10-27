const { get, set } = require("lodash");

const ActionTypes = {};

const registerActionType = ({ namespace = "ACTION", type }) => {
  if (!ActionTypes[namespace]) {
    ActionTypes[namespace] = {};
  }

  const actionTypeList = [namespace, type];
  const actionString = actionTypeList.join(".");
  if (!get(ActionTypes, actionString)) {
    ActionTypes[namespace] = {};
  }

  if (get(ActionTypes, actionString)) {
    throw new Error(
      "Registering ActionType that already exists : " +
        ActionTypes[actionString]
    );
  } else {
    const actionType = actionTypeList.join("::");
    set(ActionTypes, actionString, actionType);
    return actionType;
  }
};

exports.actionCreatorFactory = ({ namespace, type, payload }) => {
  let registeredType = registerActionType({ namespace, type });
  const action = (...args) => {
    return {
      type: registeredType,
      payload: payload ? payload(...args) : {},
      meta: this.meta
    };
  };
  action.type = registeredType;

  action.setMeta = meta => {
    this.meta = meta;
    return action;
  };
  return action;
};
