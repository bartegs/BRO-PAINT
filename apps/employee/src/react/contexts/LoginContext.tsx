import * as React from "react";

export const LoginContext = React.createContext<
  Partial<{
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<any>>;
  }>
>({ isLogged: false });

interface OwnProps {
  children: React.ReactNode;
}

export function LoginContextProvider({ children }: OwnProps): JSX.Element {
  const [isLogged, setIsLogged] = React.useState(false);

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
}
