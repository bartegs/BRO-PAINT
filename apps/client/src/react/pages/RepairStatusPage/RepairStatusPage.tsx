import * as React from "react";
import { useContext, useEffect } from "react";
import { Color } from "../../../../../common/utils/types";

import { CheckStatusForm } from "../../components/forms/CheckStatusForm";
import { Axis } from "./components";
import { AppContext } from "../../contexts/AppContext";

type RepairMainStageId = 0 | 1 | 2 | 3 | 4;

interface RepairMainStage {
  id: RepairMainStageId;
  title: string;
  description: string;
  color: Color;
}

export type RepairMainStages = RepairMainStage[];

interface Repair {
  id: string;
  repairStage: RepairMainStageId;
}

// this should be app state fetched from db
export const repairMainStages: RepairMainStages = [
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

function handleFormColoring(repairStage: number, stages: RepairMainStages) {
  return stages.find(({ id }) => id === repairStage)?.color || "black-light";
}

function isNotObjectEmpty(object: {}): boolean {
  return Object.keys(object).length && true;
}

export function RepairStatusPage(): JSX.Element {
  const { repair: repairData } = useContext(AppContext);

  function getRepairData(): Repair | undefined {
    return isNotObjectEmpty(repairData)
      ? {
          id: repairData._id,
          repairStage: repairData?.repairDetails.stage.main.id,
        }
      : undefined;
  }

  const [repair, setRepair] = React.useState<Repair>(getRepairData());
  const { repairStage } = repair || {};
  const formElementColor = handleFormColoring(repairStage, repairMainStages);

  useEffect(() => setRepair(getRepairData()), [repairData]);

  return (
    <div className="container repair-status-page">
      <section className="repair-status-page__form-container">
        <CheckStatusForm
          inputFontTheme="dark"
          inputBorderColor={formElementColor}
          buttonColor={formElementColor}
          headingColor={formElementColor}
          inputInitialValue={isNotObjectEmpty(repairData) && repairData._id}
        />
      </section>
      <Axis repairStage={repairStage} stages={repairMainStages} />
    </div>
  );
}
