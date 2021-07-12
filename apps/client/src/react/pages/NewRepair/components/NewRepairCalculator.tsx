import * as React from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";

export function NewRepairCalculator(): JSX.Element {
  const { width } = useWindowWidth();
  const [calculator, setCalculator] = React.useState({
    repairType: "Naprawa",
    year: "",
    make: "",
    carSize: "Małe",
  });

  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.currentTarget;

    if (name === "carSize") {
      setCalculator(() => ({
        ...calculator,
        carSize: value,
      }));
    } else if (name === "repairType") {
      setCalculator(() => ({
        ...calculator,
        repairType: value,
      }));
    }
  }

  function handleSelectChange(event: React.FormEvent<HTMLSelectElement>) {
    const { name } = event.currentTarget;
    const element = event.currentTarget as HTMLSelectElement;
    if (name === "year") {
      setCalculator(() => ({
        ...calculator,
        year: element.value,
      }));
    } else if (name === "make") {
      setCalculator(() => ({
        ...calculator,
        make: element.value,
      }));
    }
  }

  return (
    <div className="new-repair__calculator">
      <h2 className="new-repair__heading">
        Wylicz szacunkowy koszt naprawy {width >= 768 && <br />}
        za pomocą naszego kalkulatora
      </h2>
      <form className="new-repair__calculator__form">
        <label
          htmlFor="repairType"
          className="input--outlined__label input--outlined__label--other"
        >
          Usługa*
        </label>
        <div id="repairType" className="input--outlined">
          <Input
            name="repairType"
            value="Naprawa"
            checked={calculator.repairType === "Naprawa"}
            onChange={handleValueChange}
            type="radio"
          />
          Naprawa
          <Input
            name="repairType"
            value="Lakierowanie"
            checked={calculator.repairType === "Lakierowanie"}
            onChange={handleValueChange}
            type="radio"
          />
          Lakierowanie
          <Input
            name="repairType"
            value="Detailing"
            checked={calculator.repairType === "Detailing"}
            onChange={handleValueChange}
            type="radio"
          />
          Detailing
        </div>
        <label
          htmlFor="year"
          className="input--outlined__label input--outlined__label--other"
        >
          rocznik*
        </label>
        <select
          name="year"
          id="year"
          value={calculator.year}
          onChange={handleSelectChange}
          className="input--outlined"
          required
        >
          <option value="">Wybierz rocznik auta</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
        </select>
        <label
          htmlFor="make"
          className="input--outlined__label  input--outlined__label--other"
        >
          marka*
        </label>
        <select
          name="make"
          id="make"
          value={calculator.make}
          onChange={handleSelectChange}
          className="input--outlined"
          required
        >
          <option value="">Wybierz markę auta</option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="mercedes">Mercedes</option>
          <option value="volvo">Volvo</option>
        </select>
        <label
          htmlFor="carSize"
          className="input--outlined__label input--outlined__label--other"
        >
          rozmiar auta*
        </label>
        <div id="carSize" className="input--outlined">
          <Input
            name="carSize"
            value="Małe"
            checked={calculator.carSize === "Małe"}
            onChange={handleValueChange}
            type="radio"
          />
          Małe
          <Input
            name="carSize"
            value="Średnie"
            checked={calculator.carSize === "Średnie"}
            onChange={handleValueChange}
            type="radio"
          />
          Średnie
          <Input
            name="carSize"
            value="Duże"
            checked={calculator.carSize === "Duże"}
            onChange={handleValueChange}
            type="radio"
          />
          Duże
        </div>
        <div className="button__container mt-4">
          <Button
            text="Wylicz"
            variation="primary"
            type="submit"
            additionalClasses="button--green mr-3"
          />
          <Button text="Resetuj" variation="secondary" type="reset" />
        </div>
      </form>
    </div>
  );
}
