import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import createRoutes from "../routes";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <main className="content">
        <Switch>{createRoutes}</Switch>
      </main>
      <Footer />
    </Router>
  );
}