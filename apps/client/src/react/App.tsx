import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import createRoutes from "../routes";
import AppContextProvider from "./contexts/AppContext";

import { Footer } from "./components/Footer";
import { Navbar } from "../../../common/react/components";

export default function App(): JSX.Element {
  return (
    <Router>
      <AppContextProvider>
        <Navbar />
        <main className="content container">
          <Switch>{createRoutes}</Switch>
        </main>
        <Footer />
      </AppContextProvider>
    </Router>
  );
}
