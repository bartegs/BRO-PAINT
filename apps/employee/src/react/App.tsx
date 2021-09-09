import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import createRoutes from "../routes";
import { NavPanel } from "./components/NavPanel";

export default function App(): JSX.Element {
  const { pathname } = window.location;
  const isLoginPage = pathname.includes("/zaloguj-sie");

  return (
    <Router basename="/pracownik">
      <main className="content">
        {!isLoginPage && <NavPanel />}
        <Switch>{createRoutes}</Switch>
      </main>
    </Router>
  );
}
