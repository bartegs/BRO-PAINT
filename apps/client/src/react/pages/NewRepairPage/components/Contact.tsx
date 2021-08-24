import * as React from "react";
import classnames from "classnames";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { InputOutlined } from "../../../components/forms/components/InputOutlined";
import { Select } from "../../../components/forms/components/Select";
import { TextArea } from "../../../components/forms/components/TextArea";
import { File } from "../../../components/forms/components/File";
import { Checkbox } from "../../../components/forms/components/Checkbox";
import { Button } from "../../../components/Button/Button";

import { Color } from "../../../../../../utils/types";
import { Radio } from "../../../components/forms/components/Radio";

export function Contact(): JSX.Element {
  const { width } = useWindowWidth();
  const [contact, setContact] = React.useState({
    names: "",
    email: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    plate: "",
    paint: "",
    repairType: "Naprawa",
    description: "",
    privacy: false,
  });

  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.currentTarget;

    if (name === "names") {
      setContact(() => ({
        ...contact,
        names: value,
      }));
    } else if (name === "email") {
      setContact(() => ({
        ...contact,
        email: value,
      }));
    } else if (name === "phone") {
      setContact(() => ({
        ...contact,
        phone: value,
      }));
    } else if (name === "model") {
      setContact(() => ({
        ...contact,
        model: value,
      }));
    } else if (name === "plate") {
      setContact(() => ({
        ...contact,
        plate: value,
      }));
    } else if (name === "paint") {
      setContact(() => ({
        ...contact,
        paint: value,
      }));
    } else if (name === "repairType") {
      setContact(() => ({
        ...contact,
        repairType: value,
      }));
    }
  }

  function handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value, name } = event.currentTarget;
    if (name === "description") {
      setContact(() => ({
        ...contact,
        description: value,
      }));
    }
  }

  function handleCheckboxChange() {
    setContact(() => ({
      ...contact,
      privacy: !contact.privacy,
    }));
  }

  function handleReset() {
    setContact(() => ({
      ...contact,
      names: "",
      email: "",
      phone: "",
      year: "",
      make: "",
      model: "",
      plate: "",
      paint: "",
      repairType: "Naprawa",
      description: "",
      privacy: false,
    }));
  }

  // function handleSelectChange(event: React.FormEvent<HTMLSelectElement>) {
  //   const { name } = event.currentTarget;
  //   const element = event.currentTarget as HTMLSelectElement;
  //   if (name === "year") {
  //     setContact(() => ({
  //       ...contact,
  //       year: element.value,
  //     }));
  //   } else if (name === "make") {
  //     setContact(() => ({
  //       ...contact,
  //       make: element.value,
  //     }));
  //   }
  // }

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

  const [
    color,
    // setColor
  ] = React.useState<Color>("blue");

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
          value={contact.names}
          onChange={handleValueChange}
          type="text"
          required
        />
        <InputOutlined
          placeholder="Wpisz swój adres email"
          labelText="email*"
          color={color}
          name="email"
          id="email"
          value={contact.email}
          onChange={handleValueChange}
          type="email"
          required
        />
        <InputOutlined
          placeholder="Wpisz swój numer telefonu"
          labelText="telefon*"
          color={color}
          name="phone"
          id="phone"
          value={contact.phone}
          onChange={handleValueChange}
          type="text"
          required
        />
        <Select
          labelText="rocznik*"
          color={color}
          selectName="year"
          id="year"
          value={contact.year}
          // onChange={handleSelectChange}
          state={contact}
          setState={setContact}
          required
          optionsData={yearsData}
        />
        <Select
          labelText="marka*"
          color={color}
          selectName="make"
          id="make"
          value={contact.make}
          // onChange={handleSelectChange}
          state={contact}
          setState={setContact}
          required
          optionsData={makesData}
        />
        <InputOutlined
          labelText="model*"
          color={color}
          placeholder="Wpisz model auta"
          name="model"
          id="model"
          value={contact.model}
          onChange={handleValueChange}
          type="text"
          required
        />
        <InputOutlined
          labelText="rejestracja*"
          color={color}
          placeholder="Wpisz numer rejestracyjny auta"
          name="plate"
          id="plate"
          value={contact.plate}
          onChange={handleValueChange}
          type="text"
          required
        />
        <InputOutlined
          labelText="kod lakieru"
          color={color}
          placeholder="Wpisz kod lakieru auta"
          name="paint"
          id="paint"
          value={contact.paint}
          onChange={handleValueChange}
          type="text"
        />
        <Radio
          name="repairType"
          id="repairType"
          labelText="Usługa*"
          value={contact.repairType}
          onChange={handleValueChange}
          radioData={servicesData}
          color={color}
        />
        <TextArea
          labelText="Usługa"
          name="description"
          id="description"
          value={contact.description}
          placeholder="Opisz swoje zlecenie i podziel się swoimi uwagami."
          onChange={handleTextAreaChange}
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
          isChecked={contact.privacy}
          onChange={handleCheckboxChange}
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
            onClick={handleReset}
            additionalClasses="w-100"
          />
        </div>
      </form>
    </section>
  );
}
