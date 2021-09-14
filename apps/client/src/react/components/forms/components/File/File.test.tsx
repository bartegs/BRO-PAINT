import { render } from "@testing-library/react";
import * as React from "react";
import { File } from ".";

describe("File", () => {
  it(`should render label with "file__label" class`, () => {
    const { container } = render(<File name="test" id="test" />);

    const label = container.querySelector("label.file__label");
    expect(label).toBeInTheDocument();
  });

  it(`should render file input`, () => {
    const { container } = render(<File name="test" id="test" />);

    const file = container.querySelector(`input[type="file"]`);
    expect(file).toBeInTheDocument();
  });

  it(`should render file input with "file" class`, () => {
    const { container } = render(<File name="test" id="test" />);

    const fileClass = container.querySelector(`input.file`);
    expect(fileClass).toBeInTheDocument();
  });
});
