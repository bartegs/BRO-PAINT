import * as React from "react";
import { HomePageForm } from "./components/HomePageForm";

export function HomePage(): JSX.Element {
  React.useEffect(() => {
    document.querySelector("#root").classList.add("root-background");

    return () => {
      document.querySelector("#root").classList.remove("root-background");
    };
  }, []);

  return (
    <div className="home-page">
      <HomePageForm />
    </div>
  );
}
