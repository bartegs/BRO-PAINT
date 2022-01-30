import * as React from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";

import { Color } from "../../../../../../common/utils/types";
import { CarSizeType, CarIconType } from "../../../components/icons/CarIcon";

import {
  Radio,
  Select,
  RadioCarSize,
} from "../../../components/forms/components";
import { Button } from "../../../../../../common/react/components";
import { CalculatorCard } from "./CalculatorCard";
import { getYearData } from "../utils";
import type { MakesDataType } from "../utils";

interface CalculatorProps {
  color: Color;
  serviceName: string;
  setServiceName: (arg: string) => void;
  year: string;
  make: string;
  carSize: string;
  panels: string;
  paintCorrection: string;
  result: number;
  setYear: (arg: string) => void;
  setMake: (arg: string) => void;
  setCarSize: (arg: string) => void;
  setPanels?: (arg: string) => void;
  setPaintCorrection?: (arg: string) => void;
  setResult: (arg: number) => void;
  makesData: MakesDataType;
}

const Calculator = React.forwardRef<HTMLInputElement, CalculatorProps>(
  (
    {
      color,
      serviceName,
      year,
      make,
      carSize,
      panels,
      paintCorrection,
      result,
      setServiceName,
      setYear,
      setMake,
      setCarSize,
      setPanels,
      setPaintCorrection,
      setResult,
      makesData,
    }: CalculatorProps,
    ref
  ) => {
    const { width } = useWindowWidth();

    const [isCardVisible, setIsCardVisible] = React.useState(false);
    const [makeSegment, setMakeSegment] = React.useState(4);

    async function getMakeSegment() {
      if (makesData.length > 1) {
        const { segment } = makesData.find((current) => current.value === make);

        setMakeSegment(segment);
      }
    }

    React.useEffect(() => {
      getMakeSegment();
    }, [make]);

    function handleCalculatorReset() {
      setServiceName("Naprawa");
      setYear("");
      setMake("");
      setCarSize("Małe");
      setPanels("");
      setPaintCorrection("");
      setResult(0);
      setIsCardVisible(false);
    }

    function calculate(e: React.FormEvent) {
      e.preventDefault();
      setIsCardVisible(true);

      let yearFactor;
      const parsedYear = Number(year);

      if (parsedYear <= 1980 || parsedYear >= 2010) {
        yearFactor = 1.2;
      } else if (parsedYear > 1980 && parsedYear < 2000) {
        yearFactor = 1;
      } else if (parsedYear >= 2000 && parsedYear < 2010) {
        yearFactor = 1.1;
      } else {
        yearFactor = 1;
      }

      let makeFactor;
      if (makeSegment === 1) {
        makeFactor = 1.3;
      } else if (makeSegment === 2) {
        makeFactor = 1.2;
      } else if (makeSegment === 3) {
        makeFactor = 1.1;
      } else makeFactor = 1;

      let sizeFactor;
      switch (carSize) {
        case "Małe":
          sizeFactor = 1;
          break;
        case "Średnie":
          sizeFactor = 1.1;
          break;
        case "Duże":
          sizeFactor = 1.2;
          break;
        default:
          sizeFactor = 1;
      }

      let panelsFactor;
      switch (panels) {
        case "1":
          panelsFactor = 1;
          break;
        case "2":
          panelsFactor = 2;
          break;
        case "3":
          panelsFactor = 3;
          break;
        case "4":
          panelsFactor = 4;
          break;
        case "5":
          panelsFactor = 5;
          break;
        case "6":
          panelsFactor = 6;
          break;
        case "7":
          panelsFactor = 7;
          break;
        case "8":
          panelsFactor = 8;
          break;
        case "9":
          panelsFactor = 9;
          break;
        case "10":
          panelsFactor = 10;
          break;
        case "11":
          panelsFactor = 11;
          break;
        case "12":
          panelsFactor = 12;
          break;
        case "13":
          panelsFactor = 13;
          break;
        case "14":
          panelsFactor = 14;
          break;
        case "15":
          panelsFactor = 15;
          break;
        case "full":
          panelsFactor = 16;
          break;
        case "color-change":
          panelsFactor = 27;
          break;
        default:
          panelsFactor = 1;
      }

      let correctionTypeFactor;
      switch (paintCorrection) {
        case "3in1":
          correctionTypeFactor = 1;
          break;
        case "3in1-ceramic":
          correctionTypeFactor = 1.6;
          break;
        case "3stage":
          correctionTypeFactor = 2.4;
          break;
        case "3stage-ceramic":
          correctionTypeFactor = 3;
          break;
        default:
          correctionTypeFactor = 1;
      }

      let basePrice;
      switch (serviceName) {
        case "Naprawa":
          basePrice = 500;
          break;
        case "Lakierowanie":
          basePrice = 300;
          break;
        case "Detailing":
          basePrice = 600;
          break;
        default:
          basePrice = 500;
      }

      switch (serviceName) {
        case "Naprawa":
          setResult(
            basePrice * yearFactor * makeFactor * sizeFactor * panelsFactor
          );
          break;
        case "Lakierowanie":
          setResult(
            basePrice * yearFactor * makeFactor * sizeFactor * panelsFactor
          );
          break;
        case "Detailing":
          setResult(
            basePrice *
              correctionTypeFactor *
              yearFactor *
              makeFactor *
              sizeFactor
          );
          break;
        default:
          setResult(500);
      }
      return result;
    }

    React.useEffect(() => {
      setIsCardVisible(false);
    }, [serviceName, year, make, carSize, panels, paintCorrection]);

    const paintCorrectionsData = [
      { id: 0, value: "", text: "Wybierz rodzaj korekty lakieru" },
      { id: 1, value: "3in1", text: "Korekta 3w1" },
      { id: 2, value: "3in1-ceramic", text: "Korekta 3w1 + ceramika" },
      { id: 3, value: "3stage", text: "Korekta 3 etapowa" },
      { id: 4, value: "3stage-ceramic", text: "Korekta 3 etapowa + ceramika" },
    ];

    const repairPanelsData = [
      { id: 0, value: "", text: "Wybierz liczbę elementów" },
      { id: 1, value: "1", text: "1" },
      { id: 2, value: "2", text: "2" },
      { id: 3, value: "3", text: "3" },
      { id: 4, value: "4", text: "4" },
      { id: 5, value: "5", text: "5" },
      { id: 6, value: "6", text: "6" },
      { id: 7, value: "7", text: "7" },
      { id: 8, value: "8", text: "8" },
      { id: 9, value: "9", text: "9" },
      { id: 10, value: "10", text: "10" },
      { id: 11, value: "11", text: "11" },
      { id: 12, value: "12", text: "12" },
      { id: 13, value: "13", text: "13" },
      { id: 14, value: "14", text: "14" },
      { id: 15, value: "15", text: "15" },
    ];

    const paintPanelsData = [
      { id: 0, value: "", text: "Wybierz liczbę elementów" },
      { id: 1, value: "1", text: "1" },
      { id: 2, value: "2", text: "2" },
      { id: 3, value: "3", text: "3" },
      { id: 4, value: "4", text: "4" },
      { id: 5, value: "5", text: "5" },
      { id: 6, value: "6", text: "6" },
      { id: 7, value: "7", text: "7" },
      { id: 8, value: "8", text: "8" },
      { id: 9, value: "9", text: "9" },
      { id: 10, value: "10", text: "10" },
      { id: 11, value: "11", text: "11" },
      { id: 12, value: "12", text: "12" },
      { id: 13, value: "13", text: "13" },
      { id: 14, value: "14", text: "14" },
      { id: 15, value: "15", text: "15" },
      { id: 16, value: "full", text: "Lakierowanie całego auta" },
      { id: 17, value: "color-change", text: "Zmiana koloru auta" },
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
      <section className="new-order-page__section">
        <h2 className="new-order-page__heading">
          Wylicz szacunkowy koszt naprawy {width >= 768 && <br />}
          za pomocą naszego kalkulatora
        </h2>
        <form className="new-order-page__form" onSubmit={calculate}>
          <Radio
            name="orderType"
            id="orderType"
            labelText="USŁUGA*"
            value={serviceName}
            setState={setServiceName}
            radioData={servicesData}
            color={color}
          />
          {serviceName === "Detailing" && (
            <Select
              hasTooltip
              tooltipText="Wybierz zakres korekty. Zalecamy korekty 3 etapowe, 
                ponieważ to właśnie one przynoszą najlepszy efekt, co jest naszym priorytetem.
                Oferujemy jednak także tańsze korekty 3w1, które choć nie usuwają tak wielu rys, znacznie odświeżają wygląd lakieru.
                Niezaleznie od wybranego zakresu korekty, dajemy możliwość wyboru, czy zabezpieczyć lakier powłoką ceramiczną. 
                Podstawowe zabezpieczenie woskiem wykonujemy w cenie usługi."
              labelText="ZAKRES KOREKTY*"
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
            labelText="ROCZNIK*"
            color={color}
            selectName="calculatorYear"
            id="year"
            value={year}
            setState={setYear}
            required
            optionsData={getYearData(100)}
          />
          <Select
            labelText="MARKA*"
            color={color}
            selectName="calculatorMake"
            id="make"
            value={make}
            setState={setMake}
            required
            optionsData={makesData}
          />
          <RadioCarSize
            name="carSize"
            id="carSize"
            labelText="ROZMIAR AUTA*"
            value={carSize}
            setState={setCarSize}
            color={color}
            radioData={carSizesData}
          />
          {serviceName !== "Detailing" && (
            <Select
              labelText="LICZBA ELEMENTÓW*"
              color={color}
              selectName="panels"
              id="panels"
              value={panels}
              setState={setPanels}
              required
              optionsData={
                serviceName === "Naprawa" ? repairPanelsData : paintPanelsData
              }
              hasTooltip
              tooltipText={
                serviceName === "Naprawa"
                  ? "Podaj ilość elementów, które wymagają naprawy. Przy szacunkowej kalkulacji uszkodzone elementy liczymy jako wymagające wymiany"
                  : "Podaj ilość elementów, które wymagają lakierowania. Możesz też wybrac lakierowanie całego auta w dwóch wariantach - pomalowanie auta w ten samo kolor, lub pomalowanie auta na zupełnie nowy, wybrany przez Ciebie kolor."
              }
            />
          )}
          <div className="new-order-page__buttons mt-4">
            <Button
              text="Wylicz"
              color={color}
              type="submit"
              variant="primary"
              additionalClasses="button--centered mr-3 w-100 calculator-submit-button"
              hasFixedWidth={false}
            />
            <Button
              text="Resetuj"
              color={color}
              type="reset"
              variant="secondary"
              additionalClasses="button--centered w-100"
              onClick={handleCalculatorReset}
              hasFixedWidth={false}
            />
          </div>
        </form>
        {isCardVisible && (
          <CalculatorCard ref={ref} color={color} result={result} />
        )}
      </section>
    );
  }
);

export { Calculator };
