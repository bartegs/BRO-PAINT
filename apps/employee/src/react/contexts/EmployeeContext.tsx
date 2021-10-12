// methods modify main stage / sub stage useReducer
// as long as task isn't submitted dragging is disable

import * as React from "react";
import { SortedOrdersType } from "../../../../../server/controllers/orders";
import { OrderType } from "../../../../../server/models/Order";
// import { orderReducer } from "../reducers/orderReducer";

const emptyOrders: SortedOrdersType = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
};

export const EmployeeContext = React.createContext<
  Partial<{
    orders: SortedOrdersType;
    ordersDispatch: React.Dispatch<React.SetStateAction<any>>;
  }>
>(emptyOrders);

interface OwnProps {
  children: React.ReactNode;
}

interface ActionType {
  type: string;
  orders: {};
  stageFrom?: number;
  ordersWithMatchingStageFrom?: OrderType[];
  stageTo?: number;
  ordersWithMatchingStageTo?: OrderType[];
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
    // case "UPDATE_MAIN_STAGE":
    //   return state;
    // case "UPDATE_SUB_STAGE":
    //   return state;
    default:
      return state;
  }
}

export default function EmployeeContextProvider({ children }: OwnProps) {
  const [orders, ordersDispatch] = React.useReducer(orderReducer, emptyOrders);

  function getOrders() {
    fetch("http://localhost:3000/orders").then((resp) =>
      resp
        .json()
        .then((data) => {
          ordersDispatch({ type: "SET_ALL_ORDERS", orders: data });
        })
        .catch(() => ordersDispatch({ type: "", orders: {} }))
    );
  }

  React.useEffect(() => {
    getOrders();
  }, []);

  return (
    <EmployeeContext.Provider value={{ orders, ordersDispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}
