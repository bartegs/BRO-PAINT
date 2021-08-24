import * as React from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";
// import { Input } from "../../../components/forms/components/Input";
import { Select } from "../../../components/forms/components/Select";
import { Button } from "../../../components/Button/Button";
// import { Icon } from "../../../components/Icon";
import { CalculatorCard } from "./CalculatorCard";

import { Color } from "../../../../../../utils/types";
import { Radio } from "../../../components/forms/components/Radio";
import { RadioCarSize } from "../../../components/forms/components/RadioCarSize";

import { CarSizeType, CarIconType } from "../../../components/icons/CarIcon";

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

  // function handleSelectChange(event: React.FormEvent<HTMLSelectElement>) {
  //   const { name } = event.currentTarget;
  //   const element = event.currentTarget as HTMLSelectElement;
  //   if (name === "year") {
  //     setCalculator(() => ({
  //       ...calculator,
  //       year: element.value,
  //     }));
  //   } else if (name === "make") {
  //     setCalculator(() => ({
  //       ...calculator,
  //       make: element.value,
  //     }));
  //   } else if (name === "panels") {
  //     setCalculator(() => ({
  //       ...calculator,
  //       panels: parseInt(element.value, 10),
  //     }));
  //   } else if (name === "paintCorrection") {
  //     setCalculator(() => ({
  //       ...calculator,
  //       paintCorrection: element.value,
  //     }));
  //   }
  // }

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

  const servicesData = [
    { id: "Naprawa ", value: "Naprawa" },
    { id: "Lakierowanie ", value: "Lakierowanie", additionalClasses: "my-2" },
    { id: "Detailing ", value: "Detailing" },
  ];

  interface CarSizesDataType {
    id: string;
    value: string;
    icon: CarIconType;
    iconSize: CarSizeType;
  }

  const carSizesData: CarSizesDataType[] = [
    { id: "Małe ", value: "Małe", icon: "car-small", iconSize: "car-sm" },
    {
      id: "Średnie ",
      value: "Średnie",
      icon: "car-medium",
      iconSize: "car-md",
    },
    { id: "Duże ", value: "Duże", icon: "car-big", iconSize: "car-lg" },
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
        <Radio
          name="repairType"
          id="repairType"
          labelText="Usługa*"
          value={calculator.repairType}
          onChange={handleValueChange}
          radioData={servicesData}
          color={color}
        />
        {calculator.repairType === "Detailing" && (
          <Select
            labelText="zakres korekty*"
            color={color}
            selectName="paintCorrection"
            id="paintCorrection"
            value={calculator.paintCorrection}
            // onChange={handleSelectChange}
            state={calculator}
            setState={setCalculator}
            required
            optionsData={paintCorrectionsData}
          />
        )}
        <Select
          labelText="rocznik*"
          color={color}
          selectName="year"
          id="year"
          value={calculator.year}
          // onChange={handleSelectChange}
          state={calculator}
          setState={setCalculator}
          required
          optionsData={yearsData}
        />
        <Select
          labelText="marka*"
          color={color}
          selectName="make"
          id="make"
          value={calculator.make}
          // onChange={handleSelectChange}
          state={calculator}
          setState={setCalculator}
          required
          optionsData={makesData}
        />
        <RadioCarSize
          name="carSize"
          id="carSize"
          labelText="rozmiar auta*"
          value={calculator.carSize}
          onChange={handleValueChange}
          color={color}
          radioData={carSizesData}
        />
        {calculator.repairType !== "Detailing" && (
          <Select
            labelText="liczba elementów*"
            color={color}
            selectName="panels"
            id="panels"
            value={calculator.panels}
            // onChange={handleSelectChange}
            state={calculator}
            setState={setCalculator}
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
