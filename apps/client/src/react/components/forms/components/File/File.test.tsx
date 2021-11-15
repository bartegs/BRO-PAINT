import { render } from "@testing-library/react";
import * as React from "react";
import { File } from "./File";

const setStates = () => {};

describe("File", () => {
  it(`should render label with "file__label" class`, () => {
    const { container } = render(
      <File setState={setStates} name="test" id="test" />
    );

    const label = container.querySelector("label.file__label");
    expect(label).toBeInTheDocument();
  });

  it(`should render file input`, () => {
    const { container } = render(
      <File setState={setStates} name="test" id="test" />
    );

    const file = container.querySelector(`input[type="file"]`);
    expect(file).toBeInTheDocument();
  });

  it(`should render file input with "file" class`, () => {
    const { container } = render(
      <File setState={setStates} name="test" id="test" />
    );

    const fileClass = container.querySelector(`input.file`);
    expect(fileClass).toBeInTheDocument();
  });

  it(`should take name in props and give it to the input element`, () => {
    const { container } = render(
      <File setState={setStates} name="test" id="test" />
    );

    const name = container.querySelector(`input[name="test"]`);
    expect(name).toBeInTheDocument();
  });

  it(`should take id in props and give it to the input element`, () => {
    const { container } = render(
      <File setState={setStates} name="test" id="test" />
    );

    const id = container.querySelector(`input[id="test"]`);
    expect(id).toBeInTheDocument();
  });

  it(`should not be required by default`, () => {
    const { container } = render(
      <File setState={setStates} name="test" id="test" />
    );

    const notReq = container.querySelector(`input[required]`);
    expect(notReq).not.toBeInTheDocument();
  });

  it(`should accept the optional prop that makes the input required`, () => {
    const { container } = render(
      <File setState={setStates} required name="test" id="test" />
    );

    const req = container.querySelector(`input[required]`);
    expect(req).toBeInTheDocument();
  });
});
