import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as React from "react";
import { NewOrderPage } from "./NewOrderPage";

describe("NewOrderPage", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const newOrderPage = container.querySelector("div.new-order-page");
    expect(newOrderPage).toBeInTheDocument();
  });

  // CALCULATOR
  it(`Should render a calculator heading`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const calculatorHeading = screen.getByText(
      "Wylicz szacunkowy koszt naprawy za pomocą naszego kalkulatora"
    );
    expect(calculatorHeading).toBeInTheDocument();
  });

  it(`Should render set of radio buttons for choosing order type (calculator)`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const calculatorOrderType = screen.getAllByText("USŁUGA*")[0];
    expect(calculatorOrderType).toBeInTheDocument();
  });

  it(`Should render a select for choosing year (calculator)`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const calculatorYear = screen.getAllByText("ROCZNIK*")[0];
    expect(calculatorYear).toBeInTheDocument();
  });

  it(`Should render a select for choosing make(calculator)`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const calculatorMake = screen.getAllByText("MARKA*")[0];
    expect(calculatorMake).toBeInTheDocument();
  });

  it(`Should render a set of radio buttons for choosing car Size`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const carSize = screen.getByText("ROZMIAR AUTA*");
    expect(carSize).toBeInTheDocument();
  });

  it(`Should render a select for choosing amount of panels when "Naprawa" order type is selected`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const order = screen.getAllByText("Naprawa")[0];
    fireEvent.click(order);

    const orderPanels = screen.getByLabelText("LICZBA ELEMENTÓW*");
    expect(orderPanels).toBeInTheDocument();
  });

  it(`Should render a tooltip for panels amount select when "Naprawa" order type is selected`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const order = screen.getAllByText("Naprawa")[0];
    fireEvent.click(order);

    const orderTooltip = screen.getByText(
      "Podaj ilość elementów, które wymagają naprawy. Przy szacunkowej kalkulacji uszkodzone elementy liczymy jako wymagające wymiany"
    );
    expect(orderTooltip).toBeInTheDocument();
  });

  it(`Should render a select for choosing amount of panels when "Lakierowanie" order type is selected`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const paint = screen.getAllByText("Lakierowanie")[0];
    fireEvent.click(paint);

    const paintingPanels = screen.getByLabelText("LICZBA ELEMENTÓW*");
    expect(paintingPanels).toBeInTheDocument();
  });

  it(`Should render a tooltip for panels amount select when "Lakierowanie" order type is selected`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const painting = screen.getAllByText("Lakierowanie")[0];
    fireEvent.click(painting);

    const paintingTooltip = screen.getByText(
      "Podaj ilość elementów, które wymagają lakierowania. Możesz też wybrac lakierowanie całego auta w dwóch wariantach - pomalowanie auta w ten samo kolor, lub pomalowanie auta na zupełnie nowy, wybrany przez Ciebie kolor."
    );
    expect(paintingTooltip).toBeInTheDocument();
  });

  it(`Should render a select for choosing correction type when "Detailing" order type is selected`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const detailing = screen.getAllByText("Detailing")[0];
    fireEvent.click(detailing);

    const correction = screen.getByLabelText("ZAKRES KOREKTY*");
    expect(correction).toBeInTheDocument();
  });

  it(`Should render a tooltip for correction type select`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const detailing = screen.getAllByText("Detailing")[0];
    fireEvent.click(detailing);

    const correctionTooltip = screen.getByText(
      "Wybierz zakres korekty. Zalecamy korekty 3 etapowe, ponieważ to właśnie one przynoszą najlepszy efekt, co jest naszym priorytetem. Oferujemy jednak także tańsze korekty 3w1, które choć nie usuwają tak wielu rys, znacznie odświeżają wygląd lakieru. Niezaleznie od wybranego zakresu korekty, dajemy możliwość wyboru, czy zabezpieczyć lakier powłoką ceramiczną. Podstawowe zabezpieczenie woskiem wykonujemy w cenie usługi."
    );
    expect(correctionTooltip).toBeInTheDocument();
  });

  it(`Should render a calculate button`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const calculate = screen.getByText("Wylicz");
    expect(calculate).toBeInTheDocument();
  });

  it(`Should render a reset button (calculator)`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const calculatorReset = screen.getAllByText("Resetuj")[0];
    expect(calculatorReset).toBeInTheDocument();
  });

  // VERTICAL LINE
  it(`should render a vertical line which separates the two forms`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const line = container.querySelector("div.new-order-page__line");
    expect(line).toBeInTheDocument();
  });

  // CONTACT
  it(`Should render a contact heading`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const contactHeading = screen.getByText(
      "Lub po prostu zostaw nam dane o zleceniu, a my zajmiemy się resztą!"
    );
    expect(contactHeading).toBeInTheDocument();
  });

  it(`Should render an input for names`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const names = screen.getByLabelText("IMIE I NAZWISKO*");
    expect(names).toBeInTheDocument();
  });

  it(`Should render an input for email`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const email = screen.getByLabelText("EMAIL*");
    expect(email).toBeInTheDocument();
  });

  it(`Should render an input for phone`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const phone = screen.getByLabelText("TELEFON*");
    expect(phone).toBeInTheDocument();
  });

  it(`Should render a select for choosing year (contact)`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const contactYear = screen.getAllByText("ROCZNIK*")[1];
    expect(contactYear).toBeInTheDocument();
  });

  it(`Should render a select for choosing make(contact)`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const contactMake = screen.getAllByText("MARKA*")[1];
    expect(contactMake).toBeInTheDocument();
  });

  it(`Should render an input for car model`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const model = screen.getByLabelText("MODEL*");
    expect(model).toBeInTheDocument();
  });

  it(`Should render an input for car plate`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const plate = screen.getByLabelText("REJESTRACJA*");
    expect(plate).toBeInTheDocument();
  });

  it(`Should render an input for car paint code`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const paint = screen.getByLabelText("KOD LAKIERU");
    expect(paint).toBeInTheDocument();
  });

  it(`Should render a tooltip for car paint code`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const paintTooltip = screen.getByText(
      "Podaj kod lakieru auta. Zazwyczaj znajdziesz go na naklejce na przednim błotniku oraz na naklejce we wnęce koła zapasowego. Prosimy o to, żeby przyśpieszyć realizację zlecenia, bo jeśli nie mamy akurat dostępu do tego lakieru, to sprowadzimy go za wczasu, aby czas oczekiwania na auto był jak najkrótszy! Jeśli nie masz do tego kodu dostępu, nic się nie stało, poradzimy sobie."
    );
    expect(paintTooltip).toBeInTheDocument();
  });

  it(`Should render set of radio buttons for choosing order type (contact)`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const contactOrderType = screen.getAllByText("USŁUGA*")[1];
    expect(contactOrderType).toBeInTheDocument();
  });

  it(`Should render a textarea for order details`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const description = screen.getByLabelText("OPIS ZLECENIA");
    expect(description).toBeInTheDocument();
  });

  it(`Should render a label for file upload button`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const fileLabel = screen.getByLabelText(
      "Jeśli chcesz, możesz załączyć zdjęcia auta, pomoże nam to w oszacowaniu wymaganej pracy."
    );
    expect(fileLabel).toBeInTheDocument();
  });

  it(`Should render a file upload input`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const file = container.querySelector("input.file");
    expect(file).toBeInTheDocument();
  });

  it(`Should render a description paragraph for checkbox`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const checkboxText = container.querySelector(
      "p.new-order-page__checkbox-paragraph"
    );
    expect(checkboxText).toBeInTheDocument();
  });

  it(`Should render a checkbox`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const checkbox = container.querySelector("input.checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it(`Should render a send button`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const send = screen.getByText("Wyślij");
    expect(send).toBeInTheDocument();
  });

  it(`Should render a reset button (contact)`, () => {
    render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <NewOrderPage />
      </MemoryRouter>
    );

    const contactReset = screen.getAllByText("Resetuj")[1];
    expect(contactReset).toBeInTheDocument();
  });
});
