import * as React from "react";

interface AppContextProps {
  repair: {};
  setRepair: React.Dispatch<React.SetStateAction<{}>>;
}
export const AppContext = React.createContext<Partial<AppContextProps>>({});

interface OwnProps {
  children: React.ReactNode;
}

export default function AppContextProvider({ children }: OwnProps) {
  const [repair, setRepair] = React.useState({});

  return (
    <AppContext.Provider value={{ repair, setRepair }}>
      {children}
    </AppContext.Provider>
  );
}
