import * as React from "react";
import { Color } from "../../../../../common/utils/types";

import { Calculator } from "./components/Calculator";
import { Contact, ContactProps } from "./components/Contact";
import { host } from "../../../../../common/utils/contants";
import { MakesDataType } from "./utils";

export function NewOrderPage(): JSX.Element {
  // common
  const [serviceName, setServiceName] = React.useState("Naprawa");
  const [year, setYear] = React.useState("");
  const [make, setMake] = React.useState("");
  // calculator
  const [carSize, setCarSize] = React.useState("Małe");
  const [panels, setPanels] = React.useState("");
  const [paintCorrection, setPaintCorrection] = React.useState("");
  const [result, setResult] = React.useState(0);
  // contact
  const [names, setNames] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [model, setModel] = React.useState("");
  const [licencePlate, setLicencePlate] = React.useState("");
  const [paintCode, setPaintCode] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [privacy, setPrivacy] = React.useState(false);
  const [files, setFiles] = React.useState<Blob & { name: string }>();

  const [makesData, setMakesData] = React.useState<MakesDataType>([
    { id: -1, value: "", text: "Wybierz markę auta", segment: 0 },
  ]);

  const calculatorState = {
    serviceName,
    setServiceName,
    year,
    make,
    carSize,
    panels,
    paintCorrection,
    result,
    setYear,
    setMake,
    setCarSize,
    setPanels,
    setPaintCorrection,
    setResult,
  };

  const contactState: ContactProps = {
    files,
    names,
    email,
    phone,
    year,
    make,
    model,
    licencePlate,
    setLicencePlate,
    paintCode,
    setPaintCode,
    serviceName,
    setServiceName,
    comment,
    privacy,
    setNames,
    setEmail,
    setPhone,
    setYear,
    setMake,
    setModel,
    setComment,
    setPrivacy,
    setFiles,
    makesData,
  };
  const [color, setColor] = React.useState<Color>("green");

  async function getMakesData() {
    const data: { segment: number; name: string }[] = await fetch(
      `${host}/car-makes/`
    ).then((resp) => resp.json());

    const processedData = data.map(({ name, segment }, index) => ({
      id: index,
      value: name,
      text: name,
      segment,
    }));

    setMakesData((prevState) => [...prevState, ...processedData]);
  }

  React.useEffect(() => {
    getMakesData();
  }, []);

  React.useEffect(() => {
    if (serviceName === "Naprawa") {
      setColor("green");
    } else if (serviceName === "Lakierowanie") {
      setColor("blue");
    } else {
      setColor("pink");
    }
  }, [serviceName]);

  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <div className="container new-order-page">
      <Calculator
        makesData={makesData}
        ref={inputRef}
        {...calculatorState}
        color={color}
      />
      <div role="presentation" className="new-order-page__line" />
      <Contact
        makesData={makesData}
        ref={inputRef}
        {...contactState}
        color={color}
      />
    </div>
  );
}
