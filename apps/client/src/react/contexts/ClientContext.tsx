import * as React from "react";
import { OrderType } from "../../../../../server/models/Order";

const emptyOrder: OrderType = {
  _id: "",
  carInfo: {
    licencePlate: "",
    make: "",
    model: "",
    paintCode: "",
    productionYear: undefined,
  },
  customerInfo: { email: "", names: "", phone: "" },
  orderDetails: { orderNumber: 0, repairer: {}, stage: { main: 0, sub: 0 } },
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
