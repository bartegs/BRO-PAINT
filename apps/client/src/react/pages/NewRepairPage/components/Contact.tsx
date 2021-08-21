import * as React from "react";
import classnames from "classnames";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { Input } from "../../../components/forms/components/Input";
import { Select } from "../../../components/forms/components/Select";
import { Checkbox } from "../../../components/forms/components/Checkbox";
import { Button } from "../../../components/Button/Button";

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

  function handleSelectChange(event: React.FormEvent<HTMLSelectElement>) {
    const { name } = event.currentTarget;
    const element = event.currentTarget as HTMLSelectElement;
    if (name === "year") {
      setContact(() => ({
        ...contact,
        year: element.value,
      }));
    } else if (name === "make") {
      setContact(() => ({
        ...contact,
        make: element.value,
      }));
    }
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
        <label htmlFor="names" className="input--outlined__label">
          imie i nazwisko*
        </label>
        <Input
          placeholder="Wpisz swoje imię i nazwisko"
          name="names"
          id="names"
          value={contact.names}
          onChange={handleValueChange}
          additionalClasses="input--outlined"
          type="text"
          required
        />
        <label htmlFor="email" className="input--outlined__label">
          email*
        </label>
        <Input
          placeholder="Wpisz swój adres email"
          name="email"
          id="email"
          value={contact.email}
          onChange={handleValueChange}
          additionalClasses="input--outlined"
          type="email"
          required
        />
        {/* {contact.email} */}
        <label htmlFor="phone" className="input--outlined__label">
          telefon*
        </label>
        <Input
          placeholder="Wpisz swój numer telefonu"
          name="phone"
          id="phone"
          value={contact.phone}
          onChange={handleValueChange}
          additionalClasses="input--outlined"
          type="text"
          required
        />
        {/* {contact.phone} */}
        <Select
          labelText="rocznik*"
          color="blue"
          name="year"
          id="year"
          value={contact.year}
          onChange={handleSelectChange}
          required
          optionsData={yearsData}
        />
        {/* {contact.year} */}
        <Select
          labelText="marka*"
          color="green"
          name="make"
          id="make"
          value={contact.make}
          onChange={handleSelectChange}
          required
          optionsData={makesData}
        />
        {/* {contact.make} */}
        <label htmlFor="model" className="input--outlined__label">
          model*
        </label>
        <Input
          placeholder="Wpisz model auta"
          name="model"
          id="model"
          value={contact.model}
          onChange={handleValueChange}
          additionalClasses="input--outlined"
          type="text"
          required
        />
        {/* {contact.model} */}
        <label htmlFor="plate" className="input--outlined__label">
          rejestracja*
        </label>
        <Input
          placeholder="Wpisz numer rejestracyjny auta"
          name="plate"
          id="plate"
          value={contact.plate}
          onChange={handleValueChange}
          additionalClasses="input--outlined"
          type="text"
          required
        />
        {/* {contact.plate} */}
        <label htmlFor="paint" className="input--outlined__label">
          kod lakieru
        </label>
        <Input
          placeholder="Wpisz kod lakieru auta"
          name="paint"
          id="paint"
          value={contact.paint}
          onChange={handleValueChange}
          additionalClasses="input--outlined"
          type="text"
        />
        {/* {contact.paint} */}
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
                checked={contact.repairType === "Naprawa"}
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
                checked={contact.repairType === "Lakierowanie"}
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
                checked={contact.repairType === "Detailing"}
                onChange={handleValueChange}
                type="radio"
              />
              <span className="radio__control" />
            </span>
            <span className="radio__label">Detailing</span>
          </label>
        </div>
        <label htmlFor="description" className="input--outlined__label">
          Usługa
        </label>
        <textarea
          name="description"
          id="description"
          className="input--outlined text-area text-area--new-repair-page"
          placeholder="Opisz swoje zlecenie i podziel się swoimi uwagami."
          value={contact.description}
          onChange={handleTextAreaChange}
        />
        <label htmlFor="photo" className="input--centered-label">
          Jeśli chcesz, możesz załączyć zdjęcia auta, pomoże nam to w
          oszacowaniu wymaganej pracy.
        </label>
        <input
          type="file"
          className="input--file my-3"
          multiple
          id="photo"
          name="photo"
        />

        <Checkbox
          name="privacy"
          id="privacy"
          isChecked={contact.privacy}
          onChange={handleCheckboxChange}
          required
          color="pink"
        />
        {/* {contact.privacy.toString()} */}
        <div className="new-repair-page__buttons">
          <Button
            text="Wyślij"
            color="green"
            type="submit"
            additionalClasses="mr-3 w-100"
          />
          <Button
            text="Resetuj"
            color="green"
            type="reset"
            onClick={handleReset}
            additionalClasses="button--new-repair w-100"
          />
        </div>
      </form>
    </section>
  );
}
