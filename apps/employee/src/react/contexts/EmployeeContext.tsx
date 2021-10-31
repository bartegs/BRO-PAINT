import * as React from "react";

import { useContext } from "react";
import type { SortedOrdersType } from "../../../../../server/controllers/orders";
import type { SortedAwaitingOrdersType } from "../../../../../server/controllers/awaitingOrders";
import { host } from "../../../../common/utils/contants";
import { getToken } from "../../../../common/utils/functions";

import { awaitingOrdersReducer, orderReducer } from "../reducers";
import { LoginContext } from "./LoginContext";

const emptyOrders: SortedOrdersType = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
};

const emptyAwaitingOrders: SortedOrdersType = {
  0: [],
  1: [],
  2: [],
  3: [],
};

export const EmployeeContext = React.createContext<
  Partial<{
    orders: SortedOrdersType;
    ordersDispatch: React.Dispatch<React.SetStateAction<any>>;
    awaitingOrders: SortedAwaitingOrdersType;
    awaitingOrdersDispatch: React.Dispatch<React.SetStateAction<any>>;
  }>
>(emptyOrders);

interface OwnProps {
  children: React.ReactNode;
}

export default function EmployeeContextProvider({ children }: OwnProps) {
  const [orders, ordersDispatch] = React.useReducer(orderReducer, emptyOrders);
  const [awaitingOrders, awaitingOrdersDispatch] = React.useReducer(
    awaitingOrdersReducer,
    emptyAwaitingOrders
  );

  const { isLogged } = useContext(LoginContext);

  function getAwaitingOrders() {
    fetch(`${host}/awaiting-orders`, {
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    }).then((resp) =>
      resp
        .json()
        .then((data) =>
          awaitingOrdersDispatch({
            type: "SET_AWAITING_ORDERS",
            awaitingOrders: data,
          })
        )
        .catch(() => awaitingOrdersDispatch({ type: "", awaitingOrders: {} }))
    );
  }

  function getOrders() {
    fetch(`${host}/orders`, {
      headers: {
        authorization: `Bearer ${getToken()}`,
        role: sessionStorage.getItem("role"),
        id: sessionStorage.getItem("userId"),
      },
    }).then((resp) =>
      resp
        .json()
        .then((data) => {
          ordersDispatch({ type: "SET_ALL_ORDERS", orders: data });
        })
        .catch(() => ordersDispatch({ type: "", orders: {} }))
    );
  }

  React.useEffect(() => {
    if (isLogged) {
      getOrders();
      getAwaitingOrders();
    }
  }, [isLogged]);

  return (
    <EmployeeContext.Provider
      value={{
        orders,
        awaitingOrders,
        ordersDispatch,
        awaitingOrdersDispatch,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
