import * as React from "react";
import classnames from "classnames";
import useWindowWidth from "../../../hooks/useWindowWidth";

import { InputOutlined } from "../../../components/forms/components/InputOutlined";
import { Select } from "../../../components/forms/components/Select";
import { Radio } from "../../../components/forms/components/Radio";
import { TextArea } from "../../../components/forms/components/TextArea";
import { File } from "../../../components/forms/components/File";
import { Checkbox } from "../../../components/forms/components/Checkbox";
import { Button } from "../../../components/Button/Button";
import { Color } from "../../../../../../utils/types";

interface ContactProps {
  color: Color;
  names: string;
  email: string;
  phone: string;
  model: string;
  plate: string;
  paint: string;
  description: string;
  privacy: boolean;
  repairType: string;
  year: string;
  make: string;
  setNames: (args: any) => void;
  setEmail: (args: any) => void;
  setPhone: (args: any) => void;
  setYear: (args: any) => void;
  setMake: (args: any) => void;
  setModel: (args: any) => void;
  setPlate: (args: any) => void;
  setPaint: (args: any) => void;
  setRepairType: (args: any) => void;
  setDescription: (args: any) => void;
  setPrivacy: (arg: boolean) => void;
}

export function Contact({
  color,
  names,
  email,
  phone,
  year,
  make,
  model,
  plate,
  paint,
  repairType,
  description,
  privacy,
  setNames,
  setEmail,
  setPhone,
  setYear,
  setMake,
  setModel,
  setPlate,
  setPaint,
  setRepairType,
  setDescription,
  setPrivacy,
}: ContactProps): JSX.Element {
  const { width } = useWindowWidth();

  function handleContactReset() {
    setNames("");
    setEmail("");
    setPhone("");
    setYear("");
    setMake("");
    setModel("");
    setPlate("");
    setPaint("");
    setRepairType("Naprawa");
    setDescription("");
    setPrivacy(false);
  }

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

  const servicesData = [
    { id: "Naprawa ", value: "Naprawa" },
    { id: "Lakierowanie ", value: "Lakierowanie", additionalClasses: "my-2" },
    { id: "Detailing ", value: "Detailing" },
  ];

  return (
    <section className="new-repair-page__section">
      <h2
        className={classnames("new-repair-page__heading", {
          "mt-10": width < 1366,
        })}
      >
        Lub po prostu zostaw nam dane o {width >= 768 && <br />}
        zleceniu, a my zajmiemy się resztą!
      </h2>
      <form className="new-repair-page__form">
        <InputOutlined
          placeholder="Wpisz swoje imię i nazwisko"
          labelText="imie i nazwisko*"
          color={color}
          name="names"
          id="names"
          value={names}
          setState={setNames}
          type="text"
          fontTheme="dark"
          required
        />
        <InputOutlined
          placeholder="Wpisz swój adres email"
          labelText="email*"
          color={color}
          name="email"
          id="email"
          value={email}
          setState={setEmail}
          type="email"
          fontTheme="dark"
          required
        />
        <InputOutlined
          placeholder="Wpisz swój numer telefonu"
          labelText="telefon*"
          color={color}
          name="phone"
          id="phone"
          value={phone}
          setState={setPhone}
          type="text"
          fontTheme="dark"
          required
        />
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
        <InputOutlined
          labelText="model*"
          color={color}
          placeholder="Wpisz model auta"
          name="model"
          id="model"
          value={model}
          setState={setModel}
          type="text"
          fontTheme="dark"
          required
        />
        <InputOutlined
          labelText="rejestracja*"
          color={color}
          placeholder="Wpisz numer rejestracyjny auta"
          name="plate"
          id="plate"
          value={plate}
          setState={setPlate}
          type="text"
          fontTheme="dark"
          required
        />
        <InputOutlined
          hasTooltip={true}
          tooltipText="pekinczyk"
          labelText="kod lakieru"
          color={color}
          placeholder="Wpisz kod lakieru auta"
          name="paint"
          id="paint"
          value={paint}
          setState={setPaint}
          type="text"
          fontTheme="dark"
        />
        <Radio
          name="repairType"
          id="repairType"
          labelText="Usługa*"
          value={repairType}
          setState={setRepairType}
          radioData={servicesData}
          color={color}
        />
        <TextArea
          labelText="Usługa"
          name="description"
          id="description"
          value={description}
          placeholder="Opisz swoje zlecenie i podziel się swoimi uwagami."
          setState={setDescription}
          color={color}
          variant="outlined"
          additionalClasses="mb-3"
        />
        <File
          name="photo"
          id="photo"
          labelAdditionalClasses="file__label--centered"
          fileAdditionalClasses="my-3"
        />
        <Checkbox
          name="privacy"
          id="privacy"
          isChecked={privacy}
          setState={setPrivacy}
          required
          color={color}
        />
        <div className="new-repair-page__buttons">
          <Button
            text="Wyślij"
            color={color}
            type="submit"
            variant="primary"
            additionalClasses="mr-3 w-100"
          />
          <Button
            text="Resetuj"
            color={color}
            type="reset"
            variant="secondary"
            onClick={handleContactReset}
            additionalClasses="w-100"
          />
        </div>
      </form>
    </section>
  );
}
