import * as React from "react";
import { CheckStatusForm } from "../../components/CheckStatusForm/CheckStatusForm";

export function HomePage(): JSX.Element {
  React.useEffect(() => {
    document.querySelector("#root").classList.add("root-background");

    return () => {
      document.querySelector("#root").classList.remove("root-background");
    };
  }, []);

  return (
    <div className="home-page">
      <CheckStatusForm
        inputFontTheme="light"
        buttonColor="pink"
        background="dark"
      />
    </div>
  );
}
