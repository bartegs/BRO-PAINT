import { SortedAwaitingOrdersType } from "../../../../../server/controllers/awaitingOrders";

interface ActionType {
  awaitingOrders: {};
  awaitingOrderId: string;
  columnId: string;
  type: string;
}

export function awaitingOrdersReducer(
  state: SortedAwaitingOrdersType,
  action: Partial<ActionType>
) {
  switch (action.type) {
    case "SET_AWAITING_ORDERS":
      return action.awaitingOrders;
    case "UPDATE_ORDER_OF_AWAITING_ORDERS":
      return { ...state, [action.columnId]: action.awaitingOrders };
    case "DELETE_AWAITING_ORDER": {
      const { columnId, awaitingOrderId } = action;

      const filteredAwaitingOrders = state[columnId].filter(
        (item) => item._id !== awaitingOrderId
      );

      return { ...state, [columnId]: filteredAwaitingOrders };
    }

    default:
      return state;
  }
}
