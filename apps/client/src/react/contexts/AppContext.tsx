import * as React from "react";

interface AppContextProps {
  order: {};
  setOrder: React.Dispatch<React.SetStateAction<{}>>;
}
export const AppContext = React.createContext<Partial<AppContextProps>>({});

interface OwnProps {
  children: React.ReactNode;
}

export default function AppContextProvider({ children }: OwnProps) {
  const [order, setOrder] = React.useState({});

  return (
    <AppContext.Provider value={{ order, setOrder }}>
      {children}
    </AppContext.Provider>
  );
}
