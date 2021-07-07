import * as React from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input/Input";

export function HomePageForm(): JSX.Element {
  const [value, setValue] = React.useState("");

  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    return setValue(event.currentTarget.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <div className="home-page-form">
      <h3 className="text--white-a-80">Sprawdź status zlecenia</h3>
      <form action="" onSubmit={handleSubmit}>
        <Input
          placeholder="Podaj numer zlecenia"
          name="repair-number"
          value={value}
          onChange={handleValueChange}
          additionalClasses="mt-3 mb-5"
        />
        <Button text="Sprawdź" variation="primary" type="submit" />
      </form>
    </div>
  );
}
