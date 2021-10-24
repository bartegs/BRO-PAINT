import * as React from "react";
import { Router, Switch } from "react-router-dom";
import { useEffect } from "react";
import createRoutes, { managerRoutes, workmanRoutes } from "../routes/routes";
import { LoginContext } from "./contexts";
import EmployeeContextProvider from "./contexts/EmployeeContext";

import history from "../routes/history";
import { host } from "../../../common/utils/contants";
import { getToken } from "../../../common/utils/functions";

export default function App(): JSX.Element {
  const { isLogged, setIsLogged } = React.useContext(LoginContext);

  const routeList =
    sessionStorage.getItem("role") === "workman"
      ? workmanRoutes
      : managerRoutes;

  useEffect(() => {
    if (getToken()) {
      fetch(`${host}/employees/login`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${getToken()}`,
        },
      })
        .then((resp) => {
          if (resp.ok) {
            setIsLogged(true);

            history.push("/");
          } else {
            sessionStorage.removeItem("token");

            throw new Error("jednak u mnie nie działa");
          }
        })
        .catch((error: Error) => console.log(error.message));
    }
  }, [isLogged]);

  return (
    <Router history={history}>
      <EmployeeContextProvider>
        <main>
          <Switch>{createRoutes(routeList)}</Switch>
        </main>
      </EmployeeContextProvider>
    </Router>
  );
}
