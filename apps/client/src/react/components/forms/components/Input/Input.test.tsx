import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { Input } from "./Input";

// Empty component wrapping Input component that is being tested
// The purpose of this is to test useState changes
function TestInput() {
  const [state, setState] = React.useState("");
  return (
    <>
      <Input name="test" value={state} setState={setState} />
    </>
  );
}

describe("Input", () => {
  // static data without the React State functionality
  let value = "";
  const setStates = (string: string) => {
    value = string;
  };

  it(`should render input with type text`, () => {
    const { container } = render(
      <Input name="test" value={value} setState={setStates} />
    );

    const type = container.querySelector(`input[type="text"]`);
    expect(type).toBeInTheDocument();
  });

  it(`should have the same value as the text typed into the input`, () => {
    // render TestInput component which is just a container for Input component,
    // this allows to use proper useState because we are passing the state to
    // Input component but that's not possible in testing environment
    const { container } = render(<TestInput />);

    // select input
    const input = container.querySelector(`input[type="text"]`);
    // fill input with something
    userEvent.type(input, "test value");
    // check if value is set properly
    expect(input).toHaveValue("test value");
  });

  it(`should take the border color in props and properly apply it`, () => {
    const { container } = render(
      <Input
        borderColor="green"
        name="test"
        value={value}
        setState={setStates}
      />
    );

    const color = container.querySelector(`input.input--border-green`);
    expect(color).toBeInTheDocument();
  });

  it(`should take the light/dark font theme in props and properly apply it`, () => {
    const { container } = render(
      <Input fontTheme="light" name="test" value={value} setState={setStates} />
    );

    const theme = container.querySelector(`input.input--font-light`);
    expect(theme).toBeInTheDocument();
  });

  it(`should should accept additional css classes via props and properly apply it`, () => {
    const { container } = render(
      <Input
        additionalClasses="mt-2"
        name="test"
        value={value}
        setState={setStates}
      />
    );

    const additionalClass = container.querySelector(`input.mt-2`);
    expect(additionalClass).toBeInTheDocument();
  });

  it(`should take name in props and give it to the input element`, () => {
    const { container } = render(
      <Input name="test" value={value} setState={setStates} />
    );

    const name = container.querySelector(`input[name="test"]`);
    expect(name).toBeInTheDocument();
  });

  it(`should take id in props and give it to the input element`, () => {
    const { container } = render(
      <Input
        additionalClasses="mt-2"
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
      <Input
        placeholder="test placeholder"
        name="test"
        value={value}
        setState={setStates}
      />
    );

    const placeholder = screen.getByPlaceholderText(`test placeholder`);
    expect(placeholder).toBeInTheDocument();
  });

  it(`should not be required by default`, () => {
    const { container } = render(
      <Input name="test" value={value} setState={setStates} />
    );

    const notReq = container.querySelector(`input[required]`);
    expect(notReq).not.toBeInTheDocument();
  });

  it(`should accept the optional prop that makes the input required`, () => {
    const { container } = render(
      <Input name="test" required value={value} setState={setStates} />
    );

    const req = container.querySelector(`input[required]`);
    expect(req).toBeInTheDocument();
  });
});
