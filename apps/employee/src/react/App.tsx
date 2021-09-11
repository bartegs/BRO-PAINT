import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import createRoutes from "../routes";

import { Navbar } from "../../../common/react/components";
import { NavPanel } from "./components/NavPanel";
import { isGivenLocation } from "../../../common/utils/functions";

export default function App(): JSX.Element {
  const isLoginPage = isGivenLocation("zaloguj-sie");

  return (
    <Router basename="/pracownik">
      <main>
        {!isLoginPage && <Navbar />}
        <div className="content">
          {!isLoginPage && <NavPanel />}
          <Switch>{createRoutes}</Switch>
        </div>
      </main>
    </Router>
  );
}
