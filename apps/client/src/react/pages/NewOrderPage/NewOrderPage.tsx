import * as React from "react";
import { Color } from "../../../../../common/utils/types";

import { Calculator } from "./components/Calculator";
import { Contact } from "./components/Contact";

export function NewOrderPage(): JSX.Element {
  // common
  const [serviceType, setServiceType] = React.useState("Naprawa");
  const [year, setYear] = React.useState("");
  const [make, setMake] = React.useState("");
  // calculator
  const [carSize, setCarSize] = React.useState("Małe");
  const [panels, setPanels] = React.useState("");
  const [paintCorrection, setPaintCorrection] = React.useState("");
  const [result, setResult] = React.useState("2137");
  // contact
  const [names, setNames] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [model, setModel] = React.useState("");
  const [licencePlate, setLicencePlate] = React.useState("");
  const [paintCode, setPaintCode] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [privacy, setPrivacy] = React.useState(false);

  const calculatorState = {
    serviceType,
    year,
    make,
    carSize,
    panels,
    paintCorrection,
    result,
    setServiceType,
    setYear,
    setMake,
    setCarSize,
    setPanels,
    setPaintCorrection,
    setResult,
  };

  const contactState = {
    names,
    email,
    phone,
    year,
    make,
    model,
    licencePlate,
    paintCode,
    serviceType,
    description,
    privacy,
    setNames,
    setEmail,
    setPhone,
    setYear,
    setMake,
    setModel,
    setLicencePlate,
    setPaintCode,
    setServiceType,
    setDescription,
    setPrivacy,
  };

  const [color, setColor] = React.useState<Color>("green");

  React.useEffect(() => {
    if (serviceType === "Naprawa") {
      setColor("green");
    } else if (serviceType === "Lakierowanie") {
      setColor("blue");
    } else {
      setColor("pink");
    }
  }, [serviceType]);

  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <div className="container new-order-page">
      <Calculator ref={inputRef} {...calculatorState} color={color} />
      <div role="presentation" className="new-order-page__line" />
      <Contact ref={inputRef} {...contactState} color={color} />
    </div>
  );
}
