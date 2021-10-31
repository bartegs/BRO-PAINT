import * as React from "react";
import { OrderType } from "../../../../../server/models/Order";

export const emptyOrder: OrderType = {
  _id: "",
  carInfo: {
    licencePlate: "",
    make: "",
    model: "",
    paintCode: "",
    productionYear: undefined,
  },
  customerInfo: { email: "", names: "", phone: "" },
  orderDetails: {
    orderNumber: 0,
    repairer: {},
    stage: {
      main: { id: -1, isFinished: false },
      sub: { id: 0, isFinished: true },
    },
  },
  orderInfo: { comment: "", service: "" },
};

interface AppContextProps {
  order: OrderType;
  setOrder: React.Dispatch<React.SetStateAction<{}>>;
}

export const ClientContext = React.createContext<Partial<AppContextProps>>({});

interface OwnProps {
  children: React.ReactNode;
}

export default function ClientContextProvider({ children }: OwnProps) {
  const [order, setOrder] = React.useState(emptyOrder);

  return (
    <ClientContext.Provider value={{ order, setOrder }}>
      {children}
    </ClientContext.Provider>
  );
}
