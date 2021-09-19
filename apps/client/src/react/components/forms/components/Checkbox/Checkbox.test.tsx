import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import * as React from "react";
import { Checkbox } from ".";

// Empty component wrapping Checkbox component that is being tested
// The purpose of this is to test useState changes
function TestCheckbox() {
  const [isChecked, setState] = React.useState(false);
  return (
    <>
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
    </>
  );
}

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

  it(`should take name in props and give it to the input element`, () => {
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

    const name = container.querySelector(`input[name="test"]`);
    expect(name).toBeInTheDocument();
  });

  it(`should take id in props and give it to the input element`, () => {
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

    const id = container.querySelector(`input[id="test"]`);
    expect(id).toBeInTheDocument();
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

  it(`should check/uncheck the checkbox on click`, () => {
    // render TestCheckbox component which is just a container for Checkbox component,
    // this allows to use proper useState because we are passing the state to
    // Input component but that's not possible in testing environment
    const { container } = render(<TestCheckbox />);

    // select input
    const input = container.querySelector(`input[type="checkbox"]`);
    // click the input
    userEvent.click(input);
    // check if checked value is set properly
    expect(input).toBeChecked();
    // click the input again
    userEvent.click(input);
    // check if checked value is set properly
    expect(input).not.toBeChecked();
  });
});
