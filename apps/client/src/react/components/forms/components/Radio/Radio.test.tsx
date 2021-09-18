import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { Radio } from ".";

const testData = [
  { id: "test1 ", value: "test1" },
  { id: "test2 ", value: "test2" },
  { id: "test3 ", value: "test3" },
];

// Empty component wrapping Radio component that is being tested
// The purpose of this is to test useState changes
function TestRadio() {
  const [state, setState] = React.useState("test1");
  return (
    <>
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={state}
        setState={setState}
        radioData={testData}
        color="green"
      />
      ;
    </>
  );
}

describe("Radio", () => {
  // static data without the React State functionality
  let value = "";
  const setStates = (string: string) => {
    value = string;
  };

  it(`should render input with type radio`, () => {
    const { container } = render(
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={value}
        setState={setStates}
        radioData={testData}
        color="green"
      />
    );

    const type = container.querySelector(`input[type="radio"]`);
    expect(type).toBeInTheDocument();
  });

  it(`should render the label for the radio inputs container with a class "radio-container__label"`, () => {
    const { container } = render(
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={value}
        setState={setStates}
        radioData={testData}
        color="green"
      />
    );

    const containerLabelClass = container.querySelector(
      `label.radio-container__label`
    );
    expect(containerLabelClass).toBeInTheDocument();
  });

  it(`should render the label text for the radio inputs container`, () => {
    render(
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={value}
        setState={setStates}
        radioData={testData}
        color="green"
      />
    );

    const containerLabel = screen.getByText(`test label`);
    expect(containerLabel).toBeInTheDocument();
  });

  it(`should take the color in props and properly apply it to the label for the container`, () => {
    const { container } = render(
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={value}
        setState={setStates}
        radioData={testData}
        color="green"
      />
    );

    const containerLabelColor = container.querySelector(
      `label.radio-container__label--green`
    );
    expect(containerLabelColor).toBeInTheDocument();
  });

  it(`should render a div which is a container for the radio inputs with a proper class`, () => {
    const { container } = render(
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={value}
        setState={setStates}
        radioData={testData}
        color="green"
      />
    );

    const containerDiv = container.querySelector(`div.radio-container`);
    expect(containerDiv).toBeInTheDocument();
  });

  it(`should apply the color from props to the div which is a container for the radio inputs`, () => {
    const { container } = render(
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={value}
        setState={setStates}
        radioData={testData}
        color="green"
      />
    );

    const containerDivColor = container.querySelector(
      `div.radio-container--green`
    );
    expect(containerDivColor).toBeInTheDocument();
  });

  it(`should render a set of elements which are needed for the custom radio button to work and look correctly`, () => {
    const { container } = render(
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={value}
        setState={setStates}
        radioData={testData}
        color="green"
      />
    );

    const label = container.querySelector(`label.radio`);
    const spanInput = container.querySelector(`span.radio__input`);
    const input = container.querySelector(`input[type="radio"]`);
    const spanControl = container.querySelector(`span.radio__control`);
    const spanLabel = container.querySelector(`span.radio__label`);

    expect(label).toBeInTheDocument();
    expect(spanInput).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(spanControl).toBeInTheDocument();
    expect(spanLabel).toBeInTheDocument();
  });

  it(`should take a color in props and properly apply it to every element that creates custom radio input`, () => {
    const { container } = render(
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={value}
        setState={setStates}
        radioData={testData}
        color="green"
      />
    );

    const labelColor = container.querySelector(`label.radio--green`);
    const spanControlColor = container.querySelector(
      `span.radio__control--green`
    );

    expect(labelColor).toBeInTheDocument();
    expect(spanControlColor).toBeInTheDocument();
  });

  it(`should take name in props and give it to all of the input elements (3)`, () => {
    const { container } = render(
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={value}
        setState={setStates}
        radioData={testData}
        color="green"
      />
    );

    const name = container.querySelectorAll(`input[name="test"]`).length;
    expect(name === 3).toBeTruthy();
  });

  it(`should take id in props and give it to the radio buttons container and its label`, () => {
    const { container } = render(
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={value}
        setState={setStates}
        radioData={testData}
        color="green"
      />
    );

    const containerDivId = container.querySelector(`div[id="test"]`);
    expect(containerDivId).toBeInTheDocument();

    const containerLabelId = container.querySelector(`label[for="test"]`);
    expect(containerLabelId).toBeInTheDocument();
  });

  it(`should render the correct radio options given in the radioData prop`, () => {
    const { container } = render(
      <Radio
        name="test"
        id="test"
        labelText="test label"
        value={value}
        setState={setStates}
        radioData={testData}
        color="green"
      />
    );

    const option1 = container.querySelector(`input[value="test1"]`);
    const option2 = container.querySelector(`input[value="test2"]`);
    const option3 = container.querySelector(`input[value="test3"]`);

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it(`should have the correct input checked by default (specified in the state declaration - first option)`, () => {
    // render TestRadio component which is just a container for Radio component,
    // this allows to use proper useState because we are passing the state to
    // Radio component but that's not possible in testing environment
    const { container } = render(<TestRadio />);

    const defaultValue = container.querySelector(`input[value="test1"]`);
    expect(defaultValue).toBeChecked();
  });

  it(`should make another radio checked on click (last option)`, () => {
    // render TestRadio component which is just a container for Radio component,
    // this allows to use proper useState because we are passing the state to
    // Radio component but that's not possible in testing environment
    const { container } = render(<TestRadio />);

    // check the input checked by default
    const defaultValue = container.querySelector(`input[value="test1"]`);
    expect(defaultValue).toBeChecked();

    // select last input
    const last = container.querySelectorAll(`input[type="radio"]`).length - 1;
    const lastInput = container.querySelectorAll(`input[type="radio"]`)[last];
    // // click the last input
    userEvent.click(lastInput);
    // // check if the last input is checked
    const changedValue = container.querySelector(`input[value="test3"]`);
    expect(changedValue).toBeChecked();
  });
});
