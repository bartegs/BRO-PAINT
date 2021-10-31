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
  substage?: { id: number; isFinished: boolean };
  mainStage?: { id: number; isFinished: boolean };
  employee?: string;
  isSubstageFinished?: boolean;
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
    case "UPDATE_ORDER_SUBSTAGE": {
      const { mainStage, isSubstageFinished, orderId } = action;
      const { id: mainStageId } = mainStage;
      const matchingIndex = state[mainStage.id].findIndex(
        ({ _id }) => _id === orderId
      );
      const ordersWithMatchingStage = [...state[mainStageId]];

      ordersWithMatchingStage[matchingIndex] = {
        ...state[mainStageId][matchingIndex],
        orderDetails: {
          ...state[mainStageId][matchingIndex].orderDetails,
          stage: {
            ...state[mainStageId][matchingIndex].orderDetails.stage,
            sub: {
              ...state[mainStageId][matchingIndex].orderDetails.stage.sub,
              isFinished: isSubstageFinished,
            },
          },
        },
      };

      return {
        ...state,
        [mainStageId]: ordersWithMatchingStage,
      };
    }

    case "UPDATE_ORDER_DETAILS": {
      const { orderId, substage, mainStage, employee } = action;
      const { id: mainStageId } = mainStage;
      const matchingIndex = state[mainStage.id].findIndex(
        ({ _id }) => _id === orderId
      );

      const ordersWithMatchingStage = [...state[mainStageId]];

      ordersWithMatchingStage[matchingIndex] = {
        ...state[mainStageId][matchingIndex],
        orderDetails: {
          ...state[mainStageId][matchingIndex].orderDetails,
          stage: {
            ...state[mainStageId][matchingIndex].orderDetails.stage,
            sub: substage,
          },
          repairer: employee,
        },
      };

      return {
        ...state,
        [mainStageId]: ordersWithMatchingStage,
      };
    }

    default:
      return state;
  }
}
