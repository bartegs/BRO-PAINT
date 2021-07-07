import * as React from "react";
import { HomePageForm } from "./components/HomePageForm";

export function HomePage(): JSX.Element {
  return (
    <div className="home-page">
      <div className="home-page__content container">
        <HomePageForm />
      </div>
    </div>
  );
}
