export function orderReducer(action, state) {
  switch (action.type) {
    case "SET_ORDERS":
      return state;
    case "UPDATE_MAIN_STAGE":
      return state;
    case "UPDATE_SUB_STAGE":
      return state;
    default:
      return state;
  }
}
