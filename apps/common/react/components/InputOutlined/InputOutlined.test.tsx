import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { InputOutlined } from "./InputOutlined";

// Empty component wrapping InputOutlined component that is being tested
// The purpose of this is to test useState changes
function TestInputOutlined() {
  const [state, setState] = React.useState("");
  return (
    <>
      <InputOutlined
        labelText="test"
        color="green"
        name="test"
        id="test"
        value={state}
        setState={setState}
      />
    </>
  );
}

describe("InputOutlined", () => {
  // static data without the React State functionality
  let value = "";
  const setStates = (string: string) => {
    value = string;
  };

  it(`should render input with type text by default`, () => {
    const { container } = render(
      <InputOutlined
        labelText="test"
        color="green"
        name="test"
        id="test"
        value={value}
        setState={setStates}
      />
    );

    const typeText = container.querySelector(`input[type="text"]`);
    expect(typeText).toBeInTheDocument();
  });

  it(`should render input with type password if password prop is given`, () => {
    const { container } = render(
      <InputOutlined
        labelText="test"
        color="green"
        name="test"
        id="test"
        value={value}
        setState={setStates}
        password
      />
    );

    const typePassword = container.querySelector(`input[type="password"]`);
    expect(typePassword).toBeInTheDocument();
  });

  it(`should render label with the text given in props`, () => {
    render(
      <InputOutlined
        labelText="test"
        color="green"
        name="test"
        id="test"
        value={value}
        setState={setStates}
      />
    );

    const labelText = screen.getByLabelText(`test`);
    expect(labelText).toBeInTheDocument();
  });

  it(`should have the same value as the text typed into the input`, () => {
    // render TestInputOutlined component which is just a container for InputOutlined component,
    // this allows to use proper useState because we are passing the state to
    // InputOutlined component but that's not possible in testing environment
    const { container } = render(<TestInputOutlined />);

    // select input
    const input = container.querySelector(`input[type="text"]`);
    // fill input with something
    userEvent.type(input, "test value");
    // check if value is set properly
    expect(input).toHaveValue("test value");
  });

  it(`should take the color in props and properly apply it to the input`, () => {
    const { container } = render(
      <InputOutlined
        color="green"
        labelText="test"
        name="test"
        id="test"
        value={value}
        setState={setStates}
      />
    );

    const borderColor = container.querySelector(
      `input.input-outlined--border-green`
    );
    expect(borderColor).toBeInTheDocument();
  });

  it(`should take the color in props and properly apply it to the label`, () => {
    const { container } = render(
      <InputOutlined
        color="green"
        labelText="test"
        name="test"
        id="test"
        value={value}
        setState={setStates}
      />
    );

    const labelColor = container.querySelector(
      `label.input-outlined__label--green`
    );
    expect(labelColor).toBeInTheDocument();
  });

  it(`should take the light/dark font theme in props and properly apply it`, () => {
    const { container } = render(
      <InputOutlined
        color="green"
        fontTheme="light"
        labelText="test"
        name="test"
        id="test"
        value={value}
        setState={setStates}
      />
    );

    const theme = container.querySelector(`input.input-outlined--font-light`);
    expect(theme).toBeInTheDocument();
  });

  it(`should should accept additional css classes via props and properly apply it`, () => {
    const { container } = render(
      <InputOutlined
        additionalClasses="mx-2"
        color="green"
        fontTheme="light"
        labelText="test"
        name="test"
        id="test"
        value={value}
        setState={setStates}
      />
    );

    const additionalClass = container.querySelector(`div.mx-2`);
    expect(additionalClass).toBeInTheDocument();
  });

  it(`should take name in props and give it to the input element`, () => {
    const { container } = render(
      <InputOutlined
        color="green"
        fontTheme="light"
        labelText="test"
        name="test"
        id="test"
        value={value}
        setState={setStates}
      />
    );

    const name = container.querySelector(`input[name="test"]`);
    expect(name).toBeInTheDocument();
  });

  it(`should take id in props and give it to the input element`, () => {
    const { container } = render(
      <InputOutlined
        color="green"
        fontTheme="light"
        labelText="test"
        name="test"
        id="test"
        value={value}
        setState={setStates}
      />
    );

    const id = container.querySelector(`input[id="test"]`);
    expect(id).toBeInTheDocument();
  });

  it(`should accept placeholder in props and properly apply it`, () => {
    render(
      <InputOutlined
        color="green"
        fontTheme="light"
        labelText="test"
        placeholder="test placeholder"
        name="test"
        id="test"
        value={value}
        setState={setStates}
      />
    );

    const placeholder = screen.getByPlaceholderText(`test placeholder`);
    expect(placeholder).toBeInTheDocument();
  });

  it(`should not be required by default`, () => {
    const { container } = render(
      <InputOutlined
        color="green"
        fontTheme="light"
        labelText="test"
        name="test"
        id="test"
        value={value}
        setState={setStates}
      />
    );

    const notReq = container.querySelector(`input[required]`);
    expect(notReq).not.toBeInTheDocument();
  });

  it(`should accept the optional prop that makes the input required`, () => {
    const { container } = render(
      <InputOutlined
        color="green"
        fontTheme="light"
        labelText="test"
        name="test"
        id="test"
        value={value}
        setState={setStates}
        required
      />
    );

    const req = container.querySelector(`input[required]`);
    expect(req).toBeInTheDocument();
  });

  it(`should accept the optional prop that renders tooltip icon`, () => {
    const { container } = render(
      <InputOutlined
        color="green"
        fontTheme="light"
        labelText="test"
        name="test"
        id="test"
        value={value}
        setState={setStates}
        hasTooltip
      />
    );

    const tooltip = container.querySelector(`div.tooltip`);
    expect(tooltip).toBeInTheDocument();
  });

  it(`shouldn't render tooltip by default`, () => {
    const { container } = render(
      <InputOutlined
        color="green"
        fontTheme="light"
        labelText="test"
        name="test"
        id="test"
        value={value}
        setState={setStates}
      />
    );

    const noTooltip = container.querySelector(`div.tooltip`);
    expect(noTooltip).not.toBeInTheDocument();
  });

  it(`should accept the optional prop that fills the tooltip box with the given text`, () => {
    render(
      <InputOutlined
        color="green"
        fontTheme="light"
        labelText="test"
        name="test"
        id="test"
        value={value}
        setState={setStates}
        hasTooltip
        tooltipText="test tooltip text"
      />
    );

    const tooltipText = screen.getByText(`test tooltip text`);
    expect(tooltipText).toBeInTheDocument();
  });
});
