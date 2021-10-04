import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { RadioCarSize } from "./RadioCarSize";
import { CarIconType, CarSizeType } from "../../../icons/CarIcon";

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

// Empty component wrapping RadioCarSize component that is being tested
// The purpose of this is to test useState changes
function TestRadioCarSize() {
  const [state, setState] = React.useState("Małe");
  return (
    <>
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={state}
        setState={setState}
        color="green"
        radioData={carSizesData}
      />
    </>
  );
}

describe("RadioCarSize", () => {
  // static data without the React State functionality
  let value = "Małe";
  const setStates = (string: string) => {
    value = string;
  };

  it(`should render input with type radio`, () => {
    const { container } = render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const type = container.querySelector(`input[type="radio"]`);
    expect(type).toBeInTheDocument();
  });

  it(`should render the label for the radio inputs container with a class "radio-container__label"`, () => {
    const { container } = render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const containerLabelClass = container.querySelector(
      `label.radio-container__label`
    );
    expect(containerLabelClass).toBeInTheDocument();
  });

  it(`should render the label text for the radio inputs container`, () => {
    render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const containerLabel = screen.getByText(`ROZMIAR AUTA*`);
    expect(containerLabel).toBeInTheDocument();
  });

  it(`should take the color in props and properly apply it to the label for the container`, () => {
    const { container } = render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const containerLabelColor = container.querySelector(
      `label.radio-container__label--green`
    );
    expect(containerLabelColor).toBeInTheDocument();
  });

  it(`should render a div which is a container for the radio inputs with a proper class`, () => {
    const { container } = render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const containerDiv = container.querySelector(
      `div.radio-container--car-size`
    );
    expect(containerDiv).toBeInTheDocument();
  });

  it(`should apply the color from props to the div which is a container for the radio inputs`, () => {
    const { container } = render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const containerDivColor = container.querySelector(
      `div.radio-container--green`
    );
    expect(containerDivColor).toBeInTheDocument();
  });

  it(`should render a set of elements which are needed for the custom radio button to work and look correctly`, () => {
    const { container } = render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const label = container.querySelector(`label.radio--car-size`);
    const spanInput = container.querySelector(`span.radio__input--car-size`);
    const input = container.querySelector(`input[type="radio"]`);
    const icon = container.querySelector(`span.car-icon`);

    expect(label).toBeInTheDocument();
    expect(spanInput).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it(`should render 3 car icons (small, medium, big)`, () => {
    const { container } = render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const carSmall = container.querySelector(`span.car-icon--car-small`);
    const carMedium = container.querySelector(`span.car-icon--car-medium`);
    const carLarge = container.querySelector(`span.car-icon--car-big`);

    expect(carSmall).toBeInTheDocument();
    expect(carMedium).toBeInTheDocument();
    expect(carLarge).toBeInTheDocument();
  });

  it(`should take name in props and give it to all of the input elements (3)`, () => {
    const { container } = render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const name = container.querySelectorAll(`input[name="carSize"]`).length;
    expect(name === 3).toBeTruthy();
  });

  it(`should take id in props and give it to the radio buttons container and its label`, () => {
    const { container } = render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const containerDivId = container.querySelector(`div[id="carSize"]`);
    expect(containerDivId).toBeInTheDocument();

    const containerLabelId = container.querySelector(`label[for="carSize"]`);
    expect(containerLabelId).toBeInTheDocument();
  });

  it(`should render the correct radio options given in the radioData prop`, () => {
    const { container } = render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const option1 = container.querySelector(`input[value="Małe"]`);
    const option2 = container.querySelector(`input[value="Średnie"]`);
    const option3 = container.querySelector(`input[value="Duże"]`);

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it(`should apply the color from props to one of three car icons, the other two should be black`, () => {
    const { container } = render(
      <RadioCarSize
        name="carSize"
        id="carSize"
        labelText="ROZMIAR AUTA*"
        value={value}
        setState={setStates}
        color="green"
        radioData={carSizesData}
      />
    );

    const colouredIcon = container.querySelector(`span.car-icon--green`);
    expect(colouredIcon).toBeInTheDocument();

    const blackIcons = container.querySelectorAll(
      `span.car-icon--black-light`
    ).length;
    expect(blackIcons === 2).toBeTruthy();
  });

  it(`should have the correct input checked by default (specified in the state declaration - first option)`, () => {
    // render TestRadio component which is just a container for Radio component,
    // this allows to use proper useState because we are passing the state to
    // Radio component but that's not possible in testing environment
    const { container } = render(<TestRadioCarSize />);

    const defaultValue = container.querySelector(`input[value="Małe"]`);
    expect(defaultValue).toBeChecked();
  });

  it(`should make another radio checked on click (last option)`, () => {
    // render TestRadioCarSize component which is just a container for RadioCarSize component,
    // this allows to use proper useState because we are passing the state to
    // RadioCarSize component but that's not possible in testing environment
    const { container } = render(<TestRadioCarSize />);

    // check the input checked by default
    const defaultValue = container.querySelector(`input[value="Małe"]`);
    expect(defaultValue).toBeChecked();

    // select last input
    const last = container.querySelectorAll(`input[type="radio"]`).length - 1;
    const lastInput = container.querySelectorAll(`input[type="radio"]`)[last];
    // // click the last input
    userEvent.click(lastInput);
    // // check if the last input is checked
    const changedValue = container.querySelector(`input[value="Duże"]`);
    expect(changedValue).toBeChecked();
  });
});
