import * as React from "react";

import { CheckStatusForm } from "../../components/CheckStatusForm";
import { Axis } from "./components";

enum Color {
  blackLight = "#303030",
  green = "#008377",
  blue = "#006180",
  pink = "#6F0032",
}

interface Stage {
  id: number;
  title: string;
  descrption: string;
  color: Color;
}

export type Stages = Stage[];

export function RepairStatusPage(): JSX.Element {
  const stages: Stages = [
    {
      id: 0,
      color: Color.blackLight,
      title: "Zlecenie przyjęte Zaczynamy!",
      descrption: "",
    },
    {
      id: 1,

      color: Color.green,
      title: "Prace przygotowawcze",
      descrption:
        "Aktualnie zajmujemy się przygotowaniem Twojego auta, na tym etapie czekamy na części, naprawiamy to, czego nie trzeba wymieniać oraz maskujemy auto do malowania.",
    },
    {
      id: 2,

      color: Color.blue,
      title: "Prace lakiernicze",
      descrption:
        "W tym momencie Twoje auto jest lakierowane, począwszy od lakieru podkładowego, przez lakier bazowy (kolor) oraz na lakierze bezbarwnym kończąc. ",
    },
    {
      id: 3,
      color: Color.pink,
      title: "Detailing i kontrola jakości",
      descrption:
        "Twoje auto zostalo już polakierowane i teraz wykonujemy prace wykończeniowe - polerujemy lakier aby wydobyć z niego perfekcyjny błysk, oraz dokonujemy oceny jakości wykonanej usługi.",
    },
    {
      id: 4,
      color: Color.pink,
      title: "Zlecenie ukończone. Możesz odebrać auto!",
      descrption: "",
    },
  ];

  return (
    <div className="container repair-status-page">
      <div className="repair-status-page__form-container">
        <CheckStatusForm
          inputFontTheme="dark"
          buttonColor="black"
          headingColor="black"
          inputBorderColor="black"
        />
      </div>
      <Axis stages={stages} />
    </div>
  );
}
