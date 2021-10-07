import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { Select } from "./Select";

const testData = [
  { id: 0, value: "", text: "Wybierz opcję" },
  { id: 1, value: "test1", text: "test1" },
  { id: 2, value: "test2", text: "test2" },
];

// Empty component wrapping Select component that is being tested
// The purpose of this is to test useState changes
function TestSelect() {
  const [state, setState] = React.useState("");
  return (
    <>
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={state}
        setState={setState}
        optionsData={testData}
      />
    </>
  );
}

describe("Select", () => {
  // static data without the React State functionality
  let value = "";
  const setStates = (string: string) => {
    value = string;
  };

  it(`should render select element`, () => {
    const { container } = render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        optionsData={testData}
      />
    );

    const select = container.querySelector(`select`);
    expect(select).toBeInTheDocument();
  });

  it(`should render the label for select a class "select__label"`, () => {
    const { container } = render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        optionsData={testData}
      />
    );

    const labelClass = container.querySelector(`label.select__label`);
    expect(labelClass).toBeInTheDocument();
  });

  it(`should render the label text for the select element`, () => {
    render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        optionsData={testData}
      />
    );

    const labelText = screen.getByText(`test label`);
    expect(labelText).toBeInTheDocument();
  });

  it(`should take the color in props and properly apply it to the label for the select element`, () => {
    const { container } = render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        optionsData={testData}
      />
    );

    const labelColor = container.querySelector(`label.select__label--green`);
    expect(labelColor).toBeInTheDocument();
  });

  it(`should render a div which is a container for the select element with a proper class`, () => {
    const { container } = render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        optionsData={testData}
      />
    );

    const containerDiv = container.querySelector(`div.select`);
    expect(containerDiv).toBeInTheDocument();
  });

  it(`should apply the color from props to the div which is a container for the select element`, () => {
    const { container } = render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        optionsData={testData}
      />
    );

    const containerDivColor = container.querySelector(`div.select--green`);
    expect(containerDivColor).toBeInTheDocument();
  });

  it(`should take name in props and give it to the select element`, () => {
    const { container } = render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        optionsData={testData}
      />
    );

    const name = container.querySelector(`select[name="test"]`);
    expect(name).toBeInTheDocument();
  });

  it(`should take id in props and give it to the select element`, () => {
    const { container } = render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        optionsData={testData}
      />
    );

    const id = container.querySelector(`select[id="test"]`);
    expect(id).toBeInTheDocument();
  });

  it(`should not be required by default`, () => {
    const { container } = render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        optionsData={testData}
      />
    );

    const notReq = container.querySelector(`select[required]`);
    expect(notReq).not.toBeInTheDocument();
  });

  it(`should accept the optional prop that makes the input required`, () => {
    const { container } = render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        required
        optionsData={testData}
      />
    );

    const req = container.querySelector(`select[required]`);
    expect(req).toBeInTheDocument();
  });

  it(`should render the correct select options given in the optionsData prop`, () => {
    const { container } = render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        required
        optionsData={testData}
      />
    );

    const option0 = container.querySelector(`option[value=""]`);
    const option0Screen = screen.getByText("Wybierz opcję");
    const option1 = container.querySelector(`option[value="test1"]`);
    const option1Screen = screen.getByText("test1");
    const option2 = container.querySelector(`option[value="test2"]`);
    const option2Screen = screen.getByText("test2");

    expect(option0).toBeInTheDocument();
    expect(option0Screen).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option1Screen).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option2Screen).toBeInTheDocument();
  });

  it(`should render only one option with a disabled attribute`, () => {
    const { container } = render(
      <Select
        labelText="test label"
        color="green"
        selectName="test"
        id="test"
        value={value}
        setState={setStates}
        required
        optionsData={testData}
      />
    );

    const optionsDisabled = container.querySelectorAll(`option[hidden]`).length;
    expect(optionsDisabled === 1).toBeTruthy();
  });

  it(`should have the select with default value given in state declaration (empty string)`, () => {
    // render TestSelect component which is just a container for Select component,
    // this allows to use proper useState because we are passing the state to
    // Select component but that's not possible in testing environment
    const { container } = render(<TestSelect />);

    const defaultValue = container.querySelector(`select`);
    expect(defaultValue).toHaveValue("");
  });

  it(`should have the select with value changing when one of the options is selected (test2)`, () => {
    // render TestSelect component which is just a container for Select component,
    // this allows to use proper useState because we are passing the state to
    // Select component but that's not possible in testing environment
    const { container } = render(<TestSelect />);

    // check if the starting value of the select is an empty string
    const selectElement = container.querySelector(`select`);
    expect(selectElement).toHaveValue("");
    // select the option with text "test2"
    const option = screen.getByText(`test2`);
    userEvent.selectOptions(selectElement, [option]);
    // check if the value of the select after changes is "test2"
    expect(selectElement).toHaveValue("test2");
  });
});
