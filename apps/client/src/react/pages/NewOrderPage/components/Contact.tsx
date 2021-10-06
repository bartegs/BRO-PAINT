import * as React from "react";
import classnames from "classnames";
import useWindowWidth from "../../../hooks/useWindowWidth";

import { InputOutlined } from "../../../../../../common/react/components/InputOutlined";
import {
  Select,
  Radio,
  TextArea,
  File,
  Checkbox,
} from "../../../components/forms/components";
import { Button } from "../../../../../../common/react/components";
import { Color } from "../../../../../../common/utils/types";

export interface ContactProps {
  names: string;
  email: string;
  phone: string;
  model: string;
  licencePlate: string;
  paintCode: string;
  comment: string;
  privacy: boolean;
  serviceName: string;
  year: string;
  make: string;
  setNames: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMake: React.Dispatch<React.SetStateAction<string>>;
  setModel: React.Dispatch<React.SetStateAction<string>>;
  setLicencePlate: React.Dispatch<React.SetStateAction<string>>;
  setPaintCode: React.Dispatch<React.SetStateAction<string>>;
  setServiceName: React.Dispatch<React.SetStateAction<string>>;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  setPrivacy: React.Dispatch<React.SetStateAction<boolean>>;
}

type OwnProps = ContactProps & {
  color: Color;
};

const Contact = React.forwardRef<HTMLInputElement, OwnProps>(
  (
    {
      color,
      names,
      email,
      phone,
      model,
      licencePlate,
      paintCode,
      comment,
      privacy,
      serviceName,
      year,
      make,
      setNames,
      setEmail,
      setPhone,
      setYear,
      setMake,
      setModel,
      setLicencePlate,
      setPaintCode,
      setServiceName,
      setComment,
      setPrivacy,
    }: OwnProps,
    ref
  ) => {
    const { width } = useWindowWidth();

    function handleContactReset() {
      setNames("");
      setEmail("");
      setPhone("");
      setYear("");
      setMake("");
      setModel("");
      setLicencePlate("");
      setPaintCode("");
      setServiceName("Naprawa");
      setComment("");
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
    function handleSubmit(event: React.FormEvent) {
      event.preventDefault();

      fetch("http://localhost:3000/awaiting-orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerInfo: {
            names,
            email,
            phone,
          },

          carInfo: {
            productionYear: year,
            make,
            model,
            licencePlate,
            paintCode,
          },

          orderInfo: {
            serviceName,
            comment,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }

    return (
      <section className="new-order-page__section">
        <h2
          className={classnames("new-order-page__heading", {
            "mt-10": width < 1366,
          })}
        >
          Lub po prostu zostaw nam dane o {width >= 768 && <br />}
          zleceniu, a my zajmiemy się resztą!
        </h2>
        <form className="new-order-page__form" onSubmit={handleSubmit}>
          <InputOutlined
            placeholder="Wpisz swoje imię i nazwisko"
            labelText="IMIE I NAZWISKO*"
            color={color}
            additionalClasses="mt-4"
            name="names"
            id="names"
            value={names}
            setState={setNames}
            fontTheme="dark"
            required
            ref={ref}
          />
          <InputOutlined
            placeholder="Wpisz swój adres email"
            labelText="EMAIL*"
            additionalClasses="mt-4"
            color={color}
            name="email"
            id="email"
            value={email}
            setState={setEmail}
            fontTheme="dark"
            required
          />
          <InputOutlined
            placeholder="Wpisz swój numer telefonu"
            labelText="TELEFON*"
            additionalClasses="mt-4"
            color={color}
            name="phone"
            id="phone"
            value={phone}
            setState={setPhone}
            fontTheme="dark"
            required
          />
          <Select
            labelText="ROCZNIK*"
            color={color}
            selectName="year"
            id="year"
            value={year}
            setState={setYear}
            required
            optionsData={yearsData}
          />
          <Select
            labelText="MARKA*"
            color={color}
            selectName="make"
            id="make"
            value={make}
            setState={setMake}
            required
            optionsData={makesData}
          />
          <InputOutlined
            labelText="MODEL*"
            color={color}
            additionalClasses="mt-4"
            placeholder="Wpisz model auta"
            name="model"
            id="model"
            value={model}
            setState={setModel}
            fontTheme="dark"
            required
          />
          <InputOutlined
            labelText="REJESTRACJA*"
            color={color}
            additionalClasses="mt-4"
            placeholder="Wpisz numer rejestracyjny auta"
            name="plate"
            id="plate"
            value={licencePlate}
            setState={setLicencePlate}
            fontTheme="dark"
            required
          />
          <InputOutlined
            hasTooltip
            tooltipText="Podaj kod lakieru auta. Zazwyczaj znajdziesz go na naklejce na przednim błotniku 
              oraz na naklejce we wnęce koła zapasowego. Prosimy o to, żeby przyśpieszyć realizację zlecenia, 
              bo jeśli nie mamy akurat dostępu do tego lakieru, to sprowadzimy go za wczasu, 
              aby czas oczekiwania na auto był jak najkrótszy!
              Jeśli nie masz do tego kodu dostępu, nic się nie stało, poradzimy sobie."
            labelText="KOD LAKIERU"
            color={color}
            additionalClasses="mt-4"
            placeholder="Wpisz kod lakieru auta"
            name="paint"
            id="paint"
            value={paintCode}
            setState={setPaintCode}
            fontTheme="dark"
          />
          <Radio
            name="orderType"
            id="orderType"
            labelText="USŁUGA*"
            value={serviceName}
            setState={setServiceName}
            radioData={servicesData}
            color={color}
          />
          <TextArea
            labelText="OPIS ZLECENIA"
            name="description"
            id="description"
            value={comment}
            placeholder="Opisz swoje zlecenie i podziel się swoimi uwagami."
            setState={setComment}
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
          <div className="new-order-page__buttons">
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
);

export { Contact };
