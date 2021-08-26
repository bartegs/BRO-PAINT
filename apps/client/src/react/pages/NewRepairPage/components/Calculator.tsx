import * as React from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";

import { CarSizeType, CarIconType } from "../../../components/icons/CarIcon";

import { Radio } from "../../../components/forms/components/Radio";
import { Select } from "../../../components/forms/components/Select";
import { RadioCarSize } from "../../../components/forms/components/RadioCarSize";
import { Button } from "../../../components/Button/Button";

import { CalculatorCard } from "./CalculatorCard";
import { Color } from "../../../../../../utils/types";

interface CalculatorProps {
  color: Color;
  repairType: string;
  year: string;
  make: string;
  carSize: string;
  panels: string;
  paintCorrection: string;
  result: string;
  setRepairType: (arg: string) => void;
  setYear: (arg: string) => void;
  setMake: (arg: string) => void;
  setCarSize: (arg: string) => void;
  setPanels?: (arg: string) => void;
  setPaintCorrection?: (arg: string) => void;
  setResult: (arg: string) => void;
}

export function Calculator({
  color,
  repairType,
  year,
  make,
  carSize,
  panels,
  paintCorrection,
  result,
  setRepairType,
  setYear,
  setMake,
  setCarSize,
  setPanels,
  setPaintCorrection,
  setResult,
}: CalculatorProps): JSX.Element {
  const { width } = useWindowWidth();

  const [isCardVisible, setisCardVisible] = React.useState(false);

  function handleCalculatorReset() {
    setRepairType("Naprawa");
    setYear("");
    setMake("");
    setCarSize("Małe");
    setPanels("");
    setPaintCorrection("");
    setResult("");
    setisCardVisible(false);
  }

  function showCalculatorCard() {
    setisCardVisible((prevIsCardVisible) => !prevIsCardVisible);
  }

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    showCalculatorCard();
    setResult("2137");
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

  return (
    <section className="new-repair-page__section">
      <h2 className="new-repair-page__heading">
        Wylicz szacunkowy koszt naprawy {width >= 768 && <br />}
        za pomocą naszego kalkulatora
      </h2>
      <form className="new-repair-page__form" onSubmit={calculate}>
        <Radio
          name="repairType"
          id="repairType"
          labelText="Usługa*"
          value={repairType}
          setState={setRepairType}
          radioData={servicesData}
          color={color}
        />
        {repairType === "Detailing" && (
          <Select
            hasTooltip
            tooltipText="Wybierz zakres korekty. Wykonujemy wyłącznie korekty 3-etapowe, 
            ponieważ one przynoszą najlepszy efekt co jest naszym priorytetem. 
            Dajemy jednak możliwość wyboru, czy zabezpieczać lakier powłoką ceramiczną."
            labelText="zakres korekty*"
            color={color}
            selectName="paintCorrection"
            id="paintCorrection"
            value={paintCorrection}
            setState={setPaintCorrection}
            required
            optionsData={paintCorrectionsData}
          />
        )}
        <Select
          labelText="rocznik*"
          color={color}
          selectName="year"
          id="year"
          value={year}
          setState={setYear}
          required
          optionsData={yearsData}
        />
        <Select
          labelText="marka*"
          color={color}
          selectName="make"
          id="make"
          value={make}
          setState={setMake}
          required
          optionsData={makesData}
        />
        <RadioCarSize
          name="carSize"
          id="carSize"
          labelText="rozmiar auta*"
          value={carSize}
          setState={setCarSize}
          color={color}
          radioData={carSizesData}
        />
        {repairType !== "Detailing" && (
          <Select
            labelText="liczba elementów*"
            color={color}
            selectName="panels"
            id="panels"
            value={panels}
            setState={setPanels}
            required
            optionsData={panelsData}
            hasTooltip
            tooltipText={
              repairType === "Naprawa"
                ? "Podaj ilość elementów, które wymagają naprawy. Przy szacunkowej kalkulacji uszkodzone elementy liczymy jako wymagające wymiany"
                : "Podaj ilość elementów, które wymagają lakierowania. Możesz też wybrac lakierowanie całego auta w dwóch wariantach - pomalowanie auta w ten samo kolor, lub pomalowanie auta na zupełnie nowy, wybrany przez Ciebie kolor."
            }
          />
        )}
        <div className="new-repair-page__buttons mt-4">
          <Button
            text="Wylicz"
            color={color}
            type="submit"
            variant="primary"
            additionalClasses="button--centered mr-3 w-100"
          />
          <Button
            text="Resetuj"
            color={color}
            type="reset"
            variant="secondary"
            additionalClasses="button--centered w-100"
            onClick={handleCalculatorReset}
          />
        </div>
      </form>
      {isCardVisible && <CalculatorCard color={color} result={result} />}
    </section>
  );
}
