import { SortedOrdersType } from "../../../../../server/controllers/orders";
import { OrderType } from "../../../../../server/models/Order";

interface ActionType {
  type: string;
  orders: {};
  stageFrom?: number;
  ordersWithMatchingStageFrom?: OrderType[];
  stageTo?: number;
  ordersWithMatchingStageTo?: OrderType[];
  orderId?: string;
  substage?: number;
  mainStage?: number;
  employee?: string;
}

export function orderReducer(
  state: Partial<SortedOrdersType>,
  action: ActionType
) {
  switch (action.type) {
    case "SET_ALL_ORDERS":
      return action.orders;

    case "UPDATE_ORDER_STAGE": {
      const {
        stageFrom,
        ordersWithMatchingStageFrom,
        stageTo,
        ordersWithMatchingStageTo,
      } = action;
      return {
        ...state,
        [stageFrom]: ordersWithMatchingStageFrom,
        [stageTo]: ordersWithMatchingStageTo,
      };
    }

    case "UPDATE_ORDER_DETAILS": {
      const { orderId, substage, mainStage, employee } = action;
      const matchingIndex = state[mainStage].findIndex(
        ({ _id }) => _id === orderId
      );

      const ordersWithMatchingStage = [...state[mainStage]];

      ordersWithMatchingStage[matchingIndex] = {
        ...state[mainStage][matchingIndex],
        orderDetails: {
          ...state[mainStage][matchingIndex].orderDetails,
          stage: {
            ...state[mainStage][matchingIndex].orderDetails.stage,
            sub: substage,
          },
          repairer: employee,
        },
      };

      return {
        ...state,
        [mainStage]: ordersWithMatchingStage,
      };
    }

    default:
      return state;
  }
}
