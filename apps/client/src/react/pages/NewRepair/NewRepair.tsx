import * as React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";

import { Input } from "../../components/Input/Input";

export function NewRepair(): JSX.Element {
  const [value, setValue] = React.useState("");
  const { width } = useWindowWidth();

  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    return setValue(event.currentTarget.value);
  }

  return (
    <div className=" new-repair container">
      <div className="new-repair__calculator">
        <h2 className="new-repair__heading">
          Wylicz szacunkowy koszt naprawy {width >= 768 && <br />}
          za pomocą naszego kalkulatora
        </h2>
        <form className="new-repair__calculator__form">
          <Input
            placeholder="Podaj numer zlecenia"
            name="repair-number"
            value={value}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
          />
          <Input
            placeholder="Podaj numer zlecenia"
            name="repair-number"
            value={value}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
          />
          <Input
            placeholder="Podaj numer zlecenia"
            name="repair-number"
            value={value}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
          />
        </form>
      </div>
      <div className="new-repair__line" />
      <div className="new-repair__contact">
        <h2 className="new-repair__heading">
          Lub po prostu zostaw nam dane o {width >= 768 && <br />}
          zleceniu, a my zajmiemy się resztą!
        </h2>
        <form className="new-repair__contact__form">
          <Input
            placeholder="Podaj numer zlecenia"
            name="repair-number"
            value={value}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
          />
          <Input
            placeholder="Podaj numer zlecenia"
            name="repair-number"
            value={value}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
          />
          <Input
            placeholder="Podaj numer zlecenia"
            name="repair-number"
            value={value}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
          />
        </form>
      </div>
    </div>
  );
}
