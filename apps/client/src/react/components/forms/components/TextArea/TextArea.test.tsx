import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { TextArea } from "./TextArea";

// Empty component wrapping TextArea component that is being tested
// The purpose of this is to test useState changes
function TestTextArea() {
  const [state, setState] = React.useState("");
  return (
    <>
      <TextArea
        labelText="test label"
        name="test"
        id="test"
        value={state}
        placeholder="test placeholder"
        setState={setState}
        variant="outlined"
      />
    </>
  );
}

describe("TextArea", () => {
  // static data without the React State functionality
  let value = "";
  const setStates = (string: string) => {
    value = string;
  };

  it(`should render textarea element`, () => {
    const { container } = render(
      <TextArea
        labelText="test label"
        name="test"
        id="test"
        value={value}
        placeholder="test placeholder"
        setState={setStates}
        variant="outlined"
      />
    );

    const textarea = container.querySelector(`textarea`);
    expect(textarea).toBeInTheDocument();
  });

  it(`should render label with the text given in props`, () => {
    render(
      <TextArea
        labelText="test label"
        name="test"
        id="test"
        value={value}
        placeholder="test placeholder"
        setState={setStates}
        variant="outlined"
      />
    );

    const labelText = screen.getByLabelText(`test label`);
    expect(labelText).toBeInTheDocument();
  });

  it(`should take the color in props and properly apply it to the textarea`, () => {
    const { container } = render(
      <TextArea
        labelText="test label"
        name="test"
        id="test"
        value={value}
        placeholder="test placeholder"
        setState={setStates}
        variant="outlined"
        color="green"
      />
    );

    const textareaColor = container.querySelector(
      `textarea.text-area--outlined--green`
    );
    expect(textareaColor).toBeInTheDocument();
  });

  it(`should take the color in props and properly apply it to the label`, () => {
    const { container } = render(
      <TextArea
        labelText="test label"
        name="test"
        id="test"
        value={value}
        placeholder="test placeholder"
        setState={setStates}
        variant="outlined"
        color="green"
      />
    );

    const labelColor = container.querySelector(
      `label.text-area__label--outlined--green`
    );
    expect(labelColor).toBeInTheDocument();
  });

  it(`should have the same value as the text typed into the textarea`, () => {
    // render TestTextArea component which is just a container for TextArea component,
    // this allows to use proper useState because we are passing the state to
    // TextArea component but that's not possible in testing environment
    const { container } = render(<TestTextArea />);

    // select textarea
    const textarea = container.querySelector(`textarea`);
    // fill textarea with something
    userEvent.type(textarea, "test value");
    // check if value is set properly
    expect(textarea).toHaveValue("test value");
  });

  it(`should accept the variant in props and properly apply it`, () => {
    const { container } = render(
      <TextArea
        labelText="test label"
        name="test"
        id="test"
        value={value}
        placeholder="test placeholder"
        setState={setStates}
        variant="outlined"
        color="green"
      />
    );

    const variant = container.querySelector(`textarea.text-area--outlined`);
    expect(variant).toBeInTheDocument();
  });

  it(`should should accept additional css classes via props and properly apply it`, () => {
    const { container } = render(
      <TextArea
        additionalClasses="ml-2"
        labelText="test label"
        name="test"
        id="test"
        value={value}
        placeholder="test placeholder"
        setState={setStates}
        variant="outlined"
        color="green"
      />
    );

    const additionalClass = container.querySelector(`textarea.ml-2`);
    expect(additionalClass).toBeInTheDocument();
  });

  it(`should take name in props and give it to the textarea element`, () => {
    const { container } = render(
      <TextArea
        labelText="test label"
        name="test"
        id="test"
        value={value}
        placeholder="test placeholder"
        setState={setStates}
        variant="outlined"
        color="green"
      />
    );

    const name = container.querySelector(`textarea[name="test"]`);
    expect(name).toBeInTheDocument();
  });

  it(`should take id in props and give it to the textarea element`, () => {
    const { container } = render(
      <TextArea
        labelText="test label"
        name="test"
        id="test"
        value={value}
        placeholder="test placeholder"
        setState={setStates}
        variant="outlined"
        color="green"
      />
    );

    const id = container.querySelector(`textarea[id="test"]`);
    expect(id).toBeInTheDocument();
  });

  it(`should accept placeholder in props and properly apply it`, () => {
    render(
      <TextArea
        labelText="test label"
        name="test"
        id="test"
        value={value}
        placeholder="test placeholder"
        setState={setStates}
        variant="outlined"
        color="green"
      />
    );

    const placeholder = screen.getByPlaceholderText(`test placeholder`);
    expect(placeholder).toBeInTheDocument();
  });

  it(`should not be required by default`, () => {
    const { container } = render(
      <TextArea
        labelText="test label"
        name="test"
        id="test"
        value={value}
        placeholder="test placeholder"
        setState={setStates}
        variant="outlined"
        color="green"
      />
    );

    const notReq = container.querySelector(`textarea[required]`);
    expect(notReq).not.toBeInTheDocument();
  });

  it(`should accept the optional prop that makes the textarea required`, () => {
    const { container } = render(
      <TextArea
        labelText="test label"
        name="test"
        id="test"
        value={value}
        placeholder="test placeholder"
        setState={setStates}
        variant="outlined"
        color="green"
        required
      />
    );

    const req = container.querySelector(`textarea[required]`);
    expect(req).toBeInTheDocument();
  });
});
