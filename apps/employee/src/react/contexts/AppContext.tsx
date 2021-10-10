// methods modify main stage / sub stage useReducer
// as long as task isn't submitted dragging is disable

import * as React from "react";
import { SortedOrdersType } from "../../../../../server/controllers/orders";

export const AppContext = React.createContext<SortedOrdersType | {}>({});

interface OwnProps {
  children: React.ReactNode;
}

export default function AppContextProvider({ children }: OwnProps) {
  const [orders, setOrders] = React.useState([]);

  function getOrders() {
    fetch("http://localhost:3000/orders").then((resp) =>
      resp
        .json()
        .then((data) => setOrders(data))
        .catch(() => setOrders([]))
    );
  }

  React.useEffect(() => {
    getOrders();
  }, []);

  return <AppContext.Provider value={orders}>{children}</AppContext.Provider>;
}
