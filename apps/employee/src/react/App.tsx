import * as React from "react";
import { Router, Switch } from "react-router-dom";
import { useEffect } from "react";
import createRoutes, { managerRoutes, workmanRoutes } from "../routes/routes";
import { LoginContext } from "./contexts";
import EmployeeContextProvider from "./contexts/EmployeeContext";

import history from "../routes/history";
import { token } from "../../../common/utils/contants";

export default function App(): JSX.Element {
  const { setIsLogged } = React.useContext(LoginContext);

  const routeList =
    sessionStorage.getItem("role") === "workman"
      ? workmanRoutes
      : managerRoutes;

  useEffect(() => {
    if (token) {
      fetch(`http://localhost:3000/employees/login`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
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
  }, []);

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
