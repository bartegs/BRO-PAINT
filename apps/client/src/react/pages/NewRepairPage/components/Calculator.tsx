import * as React from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { Input } from "../../../components/forms/components/Input";
import { Select } from "../../../components/forms/components/Select";
import { Button } from "../../../components/Button/Button";
import { Icon } from "../../../components/Icon";
import { CalculatorCard } from "./CalculatorCard";

import { Color } from "../../../../../../utils/types";

export function Calculator(): JSX.Element {
  const { width } = useWindowWidth();

  interface ICalculator {
    repairType: string;
    year: string;
    make: string;
    carSize: string;
    panels?: number | string;
    paintCorrection?: string;
    // result: number | string;
  }

  const [calculator, setCalculator] = React.useState<ICalculator>({
    repairType: "Naprawa",
    year: "",
    make: "",
    carSize: "Małe",
    panels: "",
    paintCorrection: "",
    // result: 0,
  });

  const [isCardVisible, setisCardVisible] = React.useState(false);

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
    } else if (name === "panels") {
      setCalculator(() => ({
        ...calculator,
        panels: parseInt(element.value, 10),
      }));
    } else if (name === "paintCorrection") {
      setCalculator(() => ({
        ...calculator,
        paintCorrection: element.value,
      }));
    }
  }

  // function calculate(event: React.FormEvent) {
  //   event.preventDefault();
  //   setResult(result);
  //   return result;
  // }

  function handleReset() {
    setCalculator(() => ({
      ...calculator,
      repairType: "Naprawa",
      year: "",
      make: "",
      carSize: "Małe",
      panels: "",
      paintCorrection: "",
    }));
  }

  function showCalculatorCard() {
    setisCardVisible((prevIsCardVisible) => !prevIsCardVisible);
  }

  const paintCorrectionsData = [
    { id: 0, value: "", text: "Wybierz rodzaj korekty lakieru" },
    { id: 1, value: "3in1", text: "Korekta 3w1" },
    { id: 2, value: "3in1ceramic", text: "Korekta 3w1 + ceramika" },
    { id: 3, value: "3stage", text: "Korekta 3 etapowa" },
    { id: 4, value: "3stage+ceramic", text: "Korekta 3 etapowa + ceramika" },
  ];

  const yearsData = [
    { id: 0, value: "", text: "Wybierz rocznik auta" },
    { id: 1, value: "1999", text: "1999" },
    { id: 2, value: "2000", text: "2000" },
    { id: 3, value: "2001", text: "2001" },
    { id: 4, value: "2002", text: "2002" },
  ];

  const makesData = [
    { id: 0, value: "", text: "Wybierz markę auta" },
    { id: 1, value: "audi", text: "Audi" },
    { id: 2, value: "bmw", text: "BMW" },
    { id: 3, value: "mercedes", text: "Mercedes" },
    { id: 4, value: "volvo", text: "Volvo" },
  ];

  const panelsData = [
    { id: 0, value: "", text: "Wybierz liczbę elementów" },
    { id: 1, value: 1, text: "1" },
    { id: 2, value: 2, text: "2" },
    { id: 3, value: 3, text: "3" },
    { id: 4, value: 4, text: "4" },
  ];

  const [
    color,
    // setColor
  ] = React.useState<Color>("pink");

  return (
    <section className="new-repair-page__section">
      <h2 className="new-repair-page__heading">
        Wylicz szacunkowy koszt naprawy {width >= 768 && <br />}
        za pomocą naszego kalkulatora
      </h2>
      <form className="new-repair-page__form">
        <label htmlFor="repairType" className="input--outlined__label">
          Usługa*
        </label>
        <div id="repairType" className="input--outlined">
          <label className="radio" htmlFor="Naprawa">
            <span className="radio__input">
              <Input
                name="repairType"
                id="Naprawa"
                value="Naprawa"
                checked={calculator.repairType === "Naprawa"}
                onChange={handleValueChange}
                type="radio"
              />
              <span className="radio__control" />
            </span>
            <span className="radio__label">Naprawa</span>
          </label>
          <label className="radio my-2" htmlFor="Lakierowanie">
            <span className="radio__input">
              <Input
                name="repairType"
                value="Lakierowanie"
                checked={calculator.repairType === "Lakierowanie"}
                onChange={handleValueChange}
                type="radio"
              />
              <span className="radio__control" />
            </span>
            <span className="radio__label">Lakierowanie</span>
          </label>
          <label className="radio" htmlFor="Detailing">
            <span className="radio__input">
              <Input
                name="repairType"
                value="Detailing"
                checked={calculator.repairType === "Detailing"}
                onChange={handleValueChange}
                type="radio"
              />
              <span className="radio__control" />
            </span>
            <span className="radio__label">Detailing</span>
          </label>
        </div>
        {calculator.repairType === "Detailing" && (
          <Select
            labelText="zakres korekty*"
            color={color}
            name="paintCorrection"
            id="paintCorrection"
            value={calculator.paintCorrection}
            onChange={handleSelectChange}
            required
            optionsData={paintCorrectionsData}
          />
        )}
        <Select
          labelText="rocznik*"
          color={color}
          name="year"
          id="year"
          value={calculator.year}
          onChange={handleSelectChange}
          required
          optionsData={yearsData}
        />
        <Select
          labelText="marka*"
          color={color}
          name="make"
          id="make"
          value={calculator.make}
          onChange={handleSelectChange}
          required
          optionsData={makesData}
        />
        <label htmlFor="carSize" className="input--outlined__label">
          rozmiar auta*
        </label>
        <div id="carSize" className="input--outlined input--outlined--car-size">
          <label className="radio--car-size" htmlFor="Małe">
            <span className="radio__input--car-size">
              <Input
                name="carSize"
                id="Małe"
                value="Małe"
                checked={calculator.carSize === "Małe"}
                onChange={handleValueChange}
                type="radio"
              />
            </span>
            <Icon
              icon="car-small"
              size="car-sm"
              color={calculator.carSize === "Małe" ? "green" : "black-light"}
            />
          </label>
          <label className="radio--car-size" htmlFor="Średnie">
            <span className="radio__input--car-size radio__input--car-size--md">
              <Input
                name="carSize"
                value="Średnie"
                checked={calculator.carSize === "Średnie"}
                onChange={handleValueChange}
                type="radio"
              />
            </span>
            <Icon
              icon="car-medium"
              size="car-md"
              color={calculator.carSize === "Średnie" ? "green" : "black-light"}
            />
          </label>
          <label className="radio--car-size" htmlFor="Duże">
            <span className="radio__input--car-size radio__input--car-size--lg">
              <Input
                name="carSize"
                value="Duże"
                checked={calculator.carSize === "Duże"}
                onChange={handleValueChange}
                type="radio"
              />
            </span>
            <Icon
              icon="car-big"
              size="car-lg"
              color={calculator.carSize === "Duże" ? "green" : "black-light"}
            />
          </label>
        </div>
        {calculator.repairType !== "Detailing" && (
          <Select
            labelText="liczba elementów*"
            color={color}
            name="panels"
            id="panels"
            value={calculator.panels}
            onChange={handleSelectChange}
            required
            optionsData={panelsData}
          />
        )}
        <div className="new-repair-page__buttons mt-4">
          <Button
            text="Wylicz"
            color={color}
            type="submit"
            variant="primary"
            additionalClasses="button--centered mr-3 w-100"
            onClick={showCalculatorCard}
          />
          <Button
            text="Resetuj"
            color={color}
            type="reset"
            variant="secondary"
            additionalClasses="button--centered w-100"
            onClick={handleReset}
          />
        </div>
      </form>
      {/* {result} */}
      {isCardVisible && <CalculatorCard />}
    </section>
  );
}
