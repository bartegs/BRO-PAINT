import * as React from "react";
import { Router, Switch } from "react-router-dom";
import { useEffect } from "react";
import createRoutes from "../routes/routes";
import { LoginContext } from "./contexts";
import EmployeeContextProvider from "./contexts/EmployeeContext";

import history from "../routes/history";

export default function App(): JSX.Element {
  const { setIsLogged } = React.useContext(LoginContext);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      fetch(`http://localhost:3000/employees/login`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
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
          <Switch>{createRoutes}</Switch>
        </main>
      </EmployeeContextProvider>
    </Router>
  );
}
