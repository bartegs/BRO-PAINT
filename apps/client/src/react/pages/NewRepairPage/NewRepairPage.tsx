import * as React from "react";
import { Color } from "../../../../../common/utils/types";

import { Calculator } from "./components/Calculator";
import { Contact } from "./components/Contact";

export function NewRepairPage(): JSX.Element {
  // common
  const [repairType, setRepairType] = React.useState("Naprawa");
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
  const [plate, setPlate] = React.useState("");
  const [paint, setPaint] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [privacy, setPrivacy] = React.useState(false);

  const calculatorState = {
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
  };

  const contactState = {
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
  };

  const [color, setColor] = React.useState<Color>("green");

  React.useEffect(() => {
    if (repairType === "Naprawa") {
      setColor("green");
    } else if (repairType === "Lakierowanie") {
      setColor("blue");
    } else {
      setColor("pink");
    }
  }, [repairType]);

  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <div className="container new-repair-page">
      <Calculator ref={inputRef} {...calculatorState} color={color} />
      <div role="presentation" className="new-repair-page__line" />
      <Contact ref={inputRef} {...contactState} color={color} />
    </div>
  );
}
