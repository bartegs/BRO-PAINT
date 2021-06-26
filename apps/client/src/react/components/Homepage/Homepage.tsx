import * as React from "react";
import { Navbar } from "../Navbar";
import { HomepageForm } from "../HomepageForm";
import { Footer } from "../Footer";

export function Homepage(): JSX.Element {
  return (
    <div className="homepage">
      <Navbar />
      <div className="content">
        <HomepageForm />
      </div>
      <Footer variant="light" />
    </div>
  );
}
