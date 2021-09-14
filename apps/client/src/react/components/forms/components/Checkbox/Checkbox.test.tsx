import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as React from "react";
import { Checkbox } from ".";

describe("Checkbox", () => {
  let isChecked: boolean = true;
  const setState = () => !isChecked;

  it(`should render label`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <Checkbox
          name="test"
          id="test"
          color="green"
          isChecked={isChecked}
          setState={setState}
          required
        />
      </MemoryRouter>
    );

    const label = container.querySelector("label");
    expect(label).toBeInTheDocument();
  });

  it(`should render checkbox input`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <Checkbox
          name="test"
          id="test"
          color="green"
          isChecked={isChecked}
          setState={setState}
          required
        />
      </MemoryRouter>
    );

    const checkbox = container.querySelector(`input[type="checkbox"]`);
    expect(checkbox).toBeInTheDocument();
  });

  it(`should render checkbox input with a "checkbox" class`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <Checkbox
          name="test"
          id="test"
          color="green"
          isChecked={isChecked}
          setState={setState}
          required
        />
      </MemoryRouter>
    );

    const checkboxClass = container.querySelector(`input.checkbox`);
    expect(checkboxClass).toBeInTheDocument();
  });

  it(`should render checkbox with the color given in props`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <Checkbox
          name="test"
          id="test"
          color="green"
          isChecked={isChecked}
          setState={setState}
          required
        />
      </MemoryRouter>
    );

    const checkboxColor = container.querySelector(`input.checkbox--green`);
    expect(checkboxColor).toBeInTheDocument();
  });

  it(`Should render a description paragraph for checkbox`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <Checkbox
          name="test"
          id="test"
          color="green"
          isChecked={isChecked}
          setState={setState}
          required
        />
      </MemoryRouter>
    );

    const checkboxText = container.querySelector(
      "p.new-repair-page__checkbox-paragraph"
    );
    expect(checkboxText).toBeInTheDocument();
  });

  it(`should be checked when isChecked prop equals true`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <Checkbox
          name="test"
          id="test"
          color="green"
          isChecked={isChecked}
          setState={setState}
          required
        />
      </MemoryRouter>
    );

    const checkboxChecked = container.querySelector(`input[checked]`);
    expect(checkboxChecked).toBeTruthy();
  });

  it(`shouldn't be checked when isChecked prop equals false`, () => {
    isChecked = false;
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <Checkbox
          name="test"
          id="test"
          color="green"
          isChecked={isChecked}
          setState={setState}
          required
        />
      </MemoryRouter>
    );

    const checkboxUnchecked = container.querySelector(`input[checked]`);
    expect(checkboxUnchecked).toBeFalsy();
  });
});
