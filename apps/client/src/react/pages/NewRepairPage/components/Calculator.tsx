import * as React from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import { Icon } from "../../../components/Icon";
import { CalculatorCard } from "./CalculatorCard";

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

  return (
    <section className="new-repair-page__section">
      <h2 className="new-repair-page__heading">
        Wylicz szacunkowy koszt naprawy {width >= 768 && <br />}
        za pomocą naszego kalkulatora
      </h2>
      <form className="new-repair-page__form">
        <label
          htmlFor="repairType"
          className="input--outlined__label input--outlined__label--other"
        >
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
          <>
            <label
              htmlFor="make"
              className="input--outlined__label  input--outlined__label--other"
            >
              zakres korekty*
            </label>
            <div className="select">
              <select
                name="paintCorrection"
                id="paintCorrection"
                value={calculator.paintCorrection}
                onChange={handleSelectChange}
                required
              >
                <option value="" selected hidden>
                  Wybierz rodzaj korekty lakieru
                </option>
                <option value="3in1">Korekta 3w1</option>
                <option value="3in1ceramic">Korekta 3w1 + ceramika</option>
                <option value="3stage">Korekta 3 etapowa</option>
                <option value="3stage+ceramic">
                  Korekta 3 etapowa + ceramika
                </option>
              </select>
            </div>
          </>
        )}
        <label
          htmlFor="year"
          className="input--outlined__label input--outlined__label--other"
        >
          rocznik*
        </label>
        <div className="select">
          <select
            name="year"
            id="year"
            value={calculator.year}
            onChange={handleSelectChange}
            required
          >
            <option value="" selected hidden>
              Wybierz rocznik auta
            </option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
          </select>
        </div>
        <label
          htmlFor="make"
          className="input--outlined__label  input--outlined__label--other"
        >
          marka*
        </label>
        <div className="select">
          <select
            name="make"
            id="make"
            value={calculator.make}
            onChange={handleSelectChange}
            required
          >
            <option value="" selected hidden>
              Wybierz markę auta
            </option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes</option>
            <option value="volvo">Volvo</option>
          </select>
        </div>
        <label
          htmlFor="carSize"
          className="input--outlined__label input--outlined__label--other"
        >
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
          <>
            <label
              htmlFor="make"
              className="input--outlined__label  input--outlined__label--other"
            >
              liczba elementów*
            </label>
            <div className="select">
              <select
                name="panels"
                id="panels"
                value={calculator.panels}
                onChange={handleSelectChange}
                required
              >
                <option value="" selected hidden>
                  Wybierz liczbę elementów
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </>
        )}
        <div className="new-repair-page__buttons mt-4">
          <Button
            text="Wylicz"
            color="green"
            type="submit"
            additionalClasses="mr-3 w-100"
            onClick={showCalculatorCard}
          />
          <Button
            text="Resetuj"
            color="green"
            type="reset"
            additionalClasses="w-100 button--new-repair"
            onClick={handleReset}
          />
        </div>
      </form>
      {/* {result} */}
      {isCardVisible && <CalculatorCard />}
    </section>
  );
}
