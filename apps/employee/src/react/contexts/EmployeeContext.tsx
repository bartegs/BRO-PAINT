// methods modify main stage / sub stage useReducer
// as long as task isn't submitted dragging is disable

import * as React from "react";
import { SortedOrdersType } from "../../../../../server/controllers/orders";

const emptyOrder: SortedOrdersType = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
};

export const EmployeeContext = React.createContext<
  Partial<{
    orders: SortedOrdersType;
    setOrders: React.Dispatch<React.SetStateAction<any>>;
  }>
>(emptyOrder);

interface OwnProps {
  children: React.ReactNode;
}

export default function EmployeeContextProvider({ children }: OwnProps) {
  const [orders, setOrders] = React.useState<SortedOrdersType>(emptyOrder);

  function getOrders() {
    fetch("http://localhost:3000/orders").then((resp) =>
      resp
        .json()
        .then((data) => setOrders(data))
        .catch(() => setOrders({}))
    );
  }

  React.useEffect(() => {
    getOrders();
  }, []);

  return (
    <EmployeeContext.Provider value={{ orders, setOrders }}>
      {children}
    </EmployeeContext.Provider>
  );
}
