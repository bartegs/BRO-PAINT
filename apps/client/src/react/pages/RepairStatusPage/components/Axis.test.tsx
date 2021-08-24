import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";

import { handleAxisColoring, Axis } from ".";
import { repairMainStages } from "../RepairStatusPage";

describe("axis", () => {
  it("should return colors for unactive part of axis", () => {
    // given
    const { stageId, stageColor, repairStage } = {
      stageId: 3,
      stageColor: "blue",
      repairStage: 2,
    };

    // when
    const result = handleAxisColoring(stageId, stageColor, repairStage);

    // then
    expect(result).toEqual({
      segmentColor: "grey-light",
      pointColor: "white",
    });
  });

  it("should return colors for active part of axis", () => {
    // given
    const { stageId, stageColor, repairStage } = {
      stageId: 2,
      stageColor: "blue",
      repairStage: 4,
    };

    // when
    const result = handleAxisColoring(stageId, stageColor, repairStage);

    // then
    expect(result).toEqual({
      segmentColor: stageColor,
      pointColor: stageColor,
    });
  });
});
