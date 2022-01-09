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

interface CalculatorProps {
  color: Color;
  serviceName: string;
  setServiceName: (arg: string) => void;
  year: string;
  make: string;
  carSize: string;
  panels: string;
  paintCorrection: string;
  result: string;
  setYear: (arg: string) => void;
  setMake: (arg: string) => void;
  setCarSize: (arg: string) => void;
  setPanels?: (arg: string) => void;
  setPaintCorrection?: (arg: string) => void;
  setResult: (arg: string) => void;
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
    }: CalculatorProps,
    ref
  ) => {
    const { width } = useWindowWidth();

    const [isCardVisible, setisCardVisible] = React.useState(false);

    function handleCalculatorReset() {
      setServiceName("Naprawa");
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

    // function calculate(e: React.FormEvent) {
    //   e.preventDefault();
    //   showCalculatorCard();
    //   // setResult("2137");
    // }

    function calculate(e: React.FormEvent) {
      e.preventDefault();
      showCalculatorCard();

      let yearMultiplier;
      const parsedYear = Number(year);

      if (parsedYear <= 1980 || parsedYear >= 2010) {
        yearMultiplier = 1.2;
      } else if (parsedYear > 1980 && parsedYear < 2000) {
        yearMultiplier = 1;
      } else if (parsedYear >= 2000 && parsedYear < 2010) {
        yearMultiplier = 1.1;
      } else {
        yearMultiplier = 1;
      }

      let makeMultiplier;
      switch (make) {
        // case make.segment === 1:
        //   makeMultiplier = 1.3;
        //   break;
        // case make.segment === 2:
        //   makeMultiplier = 1.2;
        //   break;
        // case make.segment === 3:
        //   makeMultiplier = 1.1;
        //   break;
        // case make.segment === 4:
        //   makeMultiplier = 1;
        //   break;
        default:
          makeMultiplier = 1;
      }

      let sizeMultiplier;
      switch (carSize) {
        case "Small":
          sizeMultiplier = 1;
          break;
        case "Medium":
          sizeMultiplier = 1.1;
          break;
        case "Big":
          sizeMultiplier = 1.2;
          break;
        default:
          sizeMultiplier = 1;
      }

      let repairPanelsMultiplier;
      switch (panels) {
        case "1":
          repairPanelsMultiplier = 1;
          break;
        case "2":
          repairPanelsMultiplier = 2;
          break;
        case "3":
          repairPanelsMultiplier = 3;
          break;
        case "4":
          repairPanelsMultiplier = 4;
          break;
        case "5":
          repairPanelsMultiplier = 5;
          break;
        case "6":
          repairPanelsMultiplier = 6;
          break;
        case "7":
          repairPanelsMultiplier = 7;
          break;
        case "8":
          repairPanelsMultiplier = 8;
          break;
        case "9":
          repairPanelsMultiplier = 9;
          break;
        case "10":
          repairPanelsMultiplier = 10;
          break;
        case "11":
          repairPanelsMultiplier = 11;
          break;
        case "12":
          repairPanelsMultiplier = 12;
          break;
        case "13":
          repairPanelsMultiplier = 13;
          break;
        case "14":
          repairPanelsMultiplier = 14;
          break;
        case "15":
          repairPanelsMultiplier = 15;
          break;
        default:
          repairPanelsMultiplier = 1;
      }

      let paintPanelsFactor;
      switch (panels) {
        case "1":
          paintPanelsFactor = 1;
          break;
        case "2":
          paintPanelsFactor = 2;
          break;
        case "3":
          paintPanelsFactor = 3;
          break;
        case "4":
          paintPanelsFactor = 4;
          break;
        case "5":
          paintPanelsFactor = 5;
          break;
        case "6":
          paintPanelsFactor = 6;
          break;
        case "7":
          paintPanelsFactor = 7;
          break;
        case "8":
          paintPanelsFactor = 8;
          break;
        case "9":
          paintPanelsFactor = 9;
          break;
        case "10":
          paintPanelsFactor = 10;
          break;
        case "11":
          paintPanelsFactor = 11;
          break;
        case "12":
          paintPanelsFactor = 12;
          break;
        case "13":
          paintPanelsFactor = 13;
          break;
        case "14":
          paintPanelsFactor = 14;
          break;
        case "15":
          paintPanelsFactor = 15;
          break;
        case "full":
          paintPanelsFactor = 16;
          break;
        case "color-change":
          paintPanelsFactor = 27;
          break;
        default:
          paintPanelsFactor = 1;
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
            JSON.stringify(
              basePrice *
                yearMultiplier *
                makeMultiplier *
                sizeMultiplier *
                repairPanelsMultiplier
            )
          );
          break;
        case "Lakierowanie":
          setResult(
            JSON.stringify(
              basePrice *
                yearMultiplier *
                makeMultiplier *
                sizeMultiplier *
                paintPanelsFactor
            )
          );
          break;
        case "Detailing":
          setResult(
            JSON.stringify(
              basePrice *
                correctionTypeFactor *
                yearMultiplier *
                makeMultiplier *
                sizeMultiplier
            )
          );
          break;
        default:
          setResult("500");
      }
      return result;
    }

    // console.log(calculate("Lakierowanie", 1990, "A", "Big", "2"));

    const paintCorrectionsData = [
      { id: 0, value: "", text: "Wybierz rodzaj korekty lakieru" },
      { id: 1, value: "3in1", text: "Korekta 3w1" },
      { id: 2, value: "3in1ceramic", text: "Korekta 3w1 + ceramika" },
      { id: 3, value: "3stage", text: "Korekta 3 etapowa" },
      { id: 4, value: "3stage+ceramic", text: "Korekta 3 etapowa + ceramika" },
    ];

    function getYearData(scope: number) {
      const currentYear = new Date().getFullYear();
      const yearsData: [{ id: number; value: string | number; text: string }] =
        [{ id: 0, value: "", text: "Wybierz rocznik auta" }];

      for (let i = currentYear; i > currentYear - scope; i -= 1) {
        yearsData.push({ id: i, value: i, text: String(i) });
      }

      return yearsData;
    }

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
              tooltipText="Wybierz zakres korekty. Wykonujemy wyłącznie korekty 3-etapowe, 
                ponieważ one przynoszą najlepszy efekt co jest naszym priorytetem. 
                Dajemy jednak możliwość wyboru, czy zabezpieczać lakier powłoką ceramiczną."
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
              optionsData={panelsData}
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
