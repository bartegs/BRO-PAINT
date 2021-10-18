import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import createRoutes from "../routes";
import ClientContextProvider from "./contexts/ClientContext";

import { Footer } from "./components/Footer";
import { Navbar } from "../../../common/react/components";

export default function App(): JSX.Element {
  return (
    <Router>
      <ClientContextProvider>
        <Navbar />
        <main className="content container">
          <Switch>{createRoutes}</Switch>
        </main>
        <Footer />
      </ClientContextProvider>
    </Router>
  );
}
