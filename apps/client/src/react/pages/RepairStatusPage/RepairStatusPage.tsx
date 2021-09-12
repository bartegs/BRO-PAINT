import * as React from "react";
import { Color } from "../../../../../common/utils/types";

import { CheckStatusForm } from "../../components/forms/CheckStatusForm";
import { Axis } from "./components";

type RepairMainStageId = 0 | 1 | 2 | 3 | 4;
interface RepairMainStage {
  id: RepairMainStageId;
  title: string;
  descrption: string;
  color: Color;
}

export type RepairMainStages = RepairMainStage[];

interface Repair {
  id: number;
  repairStage: RepairMainStageId;
}

// this should be app state fetched from db
export const repairMainStages: RepairMainStages = [
  {
    id: 0,
    color: "black-light",
    title: "Zlecenie przyjęte Zaczynamy!",
    descrption: "",
  },
  {
    id: 1,
    color: "green",
    title: "Prace przygotowawcze",
    descrption:
      "Aktualnie zajmujemy się przygotowaniem Twojego auta, na tym etapie czekamy na części, naprawiamy to, czego nie trzeba wymieniać oraz maskujemy auto do malowania.",
  },
  {
    id: 2,
    color: "blue",
    title: "Prace lakiernicze",
    descrption:
      "W tym momencie Twoje auto jest lakierowane, począwszy od lakieru podkładowego, przez lakier bazowy (kolor) oraz na lakierze bezbarwnym kończąc. ",
  },
  {
    id: 3,
    color: "pink",
    title: "Detailing i kontrola jakości",
    descrption:
      "Twoje auto zostalo już polakierowane i teraz wykonujemy prace wykończeniowe - polerujemy lakier aby wydobyć z niego perfekcyjny błysk, oraz dokonujemy oceny jakości wykonanej usługi.",
  },
  {
    id: 4,
    color: "pink",
    title: "Zlecenie ukończone. Możesz odebrać auto!",
    descrption: "",
  },
];

function handleFormColoring(repairStage: number, stages: RepairMainStages) {
  return stages.find(({ id }) => id === repairStage)?.color || "black-light";
}

export function RepairStatusPage(): JSX.Element {
  const [repair] = React.useState<Repair>({ id: 1, repairStage: 2 });
  const { repairStage } = repair || {};
  const formElementColor = handleFormColoring(repairStage, repairMainStages);

  return (
    <div className="container repair-status-page">
      <section className="repair-status-page__form-container">
        <CheckStatusForm
          inputFontTheme="dark"
          inputBorderColor={formElementColor}
          buttonColor={formElementColor}
          headingColor={formElementColor}
        />
      </section>
      <Axis repairStage={repairStage} stages={repairMainStages} />
    </div>
  );
}
