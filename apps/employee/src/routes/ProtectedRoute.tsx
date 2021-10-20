import * as React from "react";
import { Redirect, Route } from "react-router-dom";

import { LoginContext } from "../react/contexts";

interface OwnProps {
  exact: boolean;
  path: string;
  component: () => JSX.Element;
}

export function ProtectedRoute({
  exact,
  path,
  component: Component,
}: OwnProps): JSX.Element {
  const { isLogged } = React.useContext(LoginContext);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (isLogged ? <Component /> : <Redirect to="logowanie" />)}
    />
  );
}
