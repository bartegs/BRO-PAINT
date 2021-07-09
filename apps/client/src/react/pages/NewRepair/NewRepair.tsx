import * as React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";

import { Input } from "../../components/Input/Input";

export function NewRepair(): JSX.Element {
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

  return (
    <div className=" new-repair container">
      <div className="new-repair__calculator">
        <h2 className="new-repair__heading">
          Wylicz szacunkowy koszt naprawy {width >= 768 && <br />}
          za pomocą naszego kalkulatora
        </h2>
        {/* <form className="new-repair__calculator__form">
          <Input
            placeholder="Podaj numer zlecenia"
            name="repair-number"
            value={value}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
          />
          <Input
            placeholder="Podaj numer zlecenia"
            name="repair-number"
            value={value}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
          />
          <Input
            placeholder="Podaj numer zlecenia"
            name="repair-number"
            value={value}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
          />
        </form> */}
      </div>
      <div className="new-repair__line" />
      <div className="new-repair__contact">
        <h2 className="new-repair__heading">
          Lub po prostu zostaw nam dane o {width >= 768 && <br />}
          zleceniu, a my zajmiemy się resztą!
        </h2>
        <form className="new-repair__contact__form">
          <Input
            placeholder="Wpisz swoje imię i nazwisko"
            name="names"
            value={contact.names}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
            type="text"
          />
          {/* {contact.names} */}
          <Input
            placeholder="Wpisz swój adres email"
            name="email"
            value={contact.email}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
            type="email"
          />
          {/* {contact.email} */}
          <Input
            placeholder="Wpisz swój numer telefonu"
            name="phone"
            value={contact.phone}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
            type="text"
          />
          {/* {contact.phone} */}
          <select
            name="year"
            value={contact.year}
            onChange={handleSelectChange}
          >
            <option value="wybierz">Wybierz rocznik auta</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
          </select>
          {/* {contact.year} */}
          <select
            name="make"
            value={contact.make}
            onChange={handleSelectChange}
          >
            <option value="wybierz">Wybierz markę auta</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes</option>
            <option value="volvo">Volvo</option>
          </select>
          {/* {contact.make} */}
          <Input
            placeholder="Wpisz model auta"
            name="model"
            value={contact.model}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
            type="text"
          />
          {/* {contact.model} */}
          <Input
            placeholder="Wpisz numer rejestracyjny auta"
            name="plate"
            value={contact.plate}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
            type="text"
          />
          {/* {contact.plate} */}
          <Input
            placeholder="Wpisz kod lakieru auta"
            name="paint"
            value={contact.paint}
            onChange={handleValueChange}
            additionalClasses="mt-3 mb-5"
            type="text"
          />
          {/* {contact.paint} */}
          <div className="radio-container">
            <Input
              name="repairType"
              value="Naprawa"
              checked={contact.repairType === "Naprawa"}
              onChange={handleValueChange}
              type="radio"
            />
            Naprawa
            <Input
              name="repairType"
              value="Lakierowanie"
              checked={contact.repairType === "Lakierowanie"}
              onChange={handleValueChange}
              type="radio"
            />
            Lakierowanie
            <Input
              name="repairType"
              value="Detailing"
              checked={contact.repairType === "Detailing"}
              onChange={handleValueChange}
              type="radio"
            />
            Detailing
            {/* {contact.repairType} */}
          </div>
          <textarea
            name="description"
            value={contact.description}
            onChange={handleTextAreaChange}
            cols={40}
            rows={4}
          />
          Zapoznałem/am się z
          <a href="https://policies.google.com/privacy?hl=en-US">
            &nbsp;Polityką Prywatności&nbsp;
          </a>
          i wyrażam zgodę na przetwarzanie danych osobowych
          <input
            name="privacy"
            type="checkbox"
            checked={contact.privacy}
            onChange={handleCheckboxChange}
          />
          {/* {contact.privacy.toString()} */}
        </form>
      </div>
    </div>
  );
}
