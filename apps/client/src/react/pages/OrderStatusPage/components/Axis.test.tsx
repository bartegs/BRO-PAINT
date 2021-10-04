import { render } from "@testing-library/react";
import * as React from "react";

import { handleAxisColoring, Axis } from "./Axis";
import { OrderMainStages } from "../OrderStatusPage";

describe("Axis", () => {
  const repairMainStages: OrderMainStages = [
    {
      id: 0,
      color: "black-light",
      title: "Zlecenie przyjęte Zaczynamy!",
      description: "",
    },
    {
      id: 1,
      color: "green",
      title: "Prace przygotowawcze",
      description:
        "Aktualnie zajmujemy się przygotowaniem Twojego auta, na tym etapie czekamy na części, naprawiamy to, czego nie trzeba wymieniać oraz maskujemy auto do malowania.",
    },
    {
      id: 2,
      color: "blue",
      title: "Prace lakiernicze",
      description:
        "W tym momencie Twoje auto jest lakierowane, począwszy od lakieru podkładowego, przez lakier bazowy (kolor) oraz na lakierze bezbarwnym kończąc. ",
    },
    {
      id: 3,
      color: "pink",
      title: "Detailing i kontrola jakości",
      description:
        "Twoje auto zostalo już polakierowane i teraz wykonujemy prace wykończeniowe - polerujemy lakier aby wydobyć z niego perfekcyjny błysk, oraz dokonujemy oceny jakości wykonanej usługi.",
    },
    {
      id: 4,
      color: "pink",
      title: "Zlecenie ukończone. Możesz odebrać auto!",
      description: "",
    },
  ];

  it(`should render correctly to the page`, () => {
    const { container } = render(
      <Axis stages={repairMainStages} orderStage={1} />
    );

    const axis = container.querySelector(
      "section.order-status-page__axis-container"
    );
    expect(axis).toBeInTheDocument();
  });

  it(`should render an axis segment`, () => {
    const { container } = render(
      <Axis stages={repairMainStages} orderStage={1} />
    );

    const axisSegment = container.querySelector("div.axis__segment");
    expect(axisSegment).toBeInTheDocument();
  });

  it(`should render an axis point`, () => {
    const { container } = render(
      <Axis stages={repairMainStages} orderStage={1} />
    );

    const axisPoint = container.querySelector("div.segment__point");
    expect(axisPoint).toBeInTheDocument();
  });

  it(`should render a card with stages descriptions`, () => {
    const { container } = render(
      <Axis stages={repairMainStages} orderStage={1} />
    );

    const axisCard = container.querySelector("div.axis__card");
    expect(axisCard).toBeInTheDocument();
  });

  it(`should render 5 axis points`, () => {
    const { container } = render(
      <Axis stages={repairMainStages} orderStage={1} />
    );

    const axisPoints = container.querySelectorAll("div.segment__point").length;
    expect(axisPoints === 5).toBeTruthy();
  });

  it(`should render 5 axis segments`, () => {
    const { container } = render(
      <Axis stages={repairMainStages} orderStage={1} />
    );

    const axisSegments = container.querySelectorAll("div.axis__segment").length;
    expect(axisSegments === 5).toBeTruthy();
  });

  it(`should render 5 axis cards`, () => {
    const { container } = render(
      <Axis stages={repairMainStages} orderStage={1} />
    );

    const axisCards = container.querySelectorAll("div.axis__card").length;
    expect(axisCards === 5).toBeTruthy();
  });
});

describe("axis function", () => {
  it("should return colors for unactive part of axis", () => {
    const { stageId, stageColor, repairStage } = {
      stageId: 3,
      stageColor: "blue",
      repairStage: 2,
    };

    const result = handleAxisColoring(stageId, stageColor, repairStage);
    expect(result).toEqual({
      segmentColor: "grey-light",
      pointColor: "white",
    });
  });

  it("should return colors for active part of axis", () => {
    const { stageId, stageColor, repairStage } = {
      stageId: 2,
      stageColor: "blue",
      repairStage: 4,
    };

    const result = handleAxisColoring(stageId, stageColor, repairStage);
    expect(result).toEqual({
      segmentColor: stageColor,
      pointColor: stageColor,
    });
  });
});
