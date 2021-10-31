import * as React from "react";
import { useContext, useEffect } from "react";
import { Color } from "../../../../../common/utils/types";

import { CheckStatusForm } from "../../components/forms/CheckStatusForm";
import { Axis } from "./components";
import { ClientContext } from "../../contexts/ClientContext";

interface OrderMainStage {
  id: number;
  title: string;
  description: string;
  color: Color;
}

export type OrderMainStages = OrderMainStage[];

interface OrderStatus {
  id: string;
  orderStage: number;
}

export const orderMainStages: OrderMainStages = [
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

function handleFormColoring(orderStage: number, stages: OrderMainStages) {
  return stages.find(({ id }) => id === orderStage)?.color || "black-light";
}

function isNotObjectEmpty(object: {}): boolean {
  return Object.keys(object).length && true;
}

export function OrderStatusPage(): JSX.Element {
  const { order: orderData } = useContext(ClientContext);

  function getOrderData(): OrderStatus {
    return {
      id: orderData._id,
      orderStage: orderData?.orderDetails.stage.main.id,
    };
  }

  const [order, setOrder] = React.useState<OrderStatus>(getOrderData());
  const { orderStage } = order || {};
  const formElementColor = handleFormColoring(orderStage, orderMainStages);

  useEffect(() => setOrder(getOrderData()), [orderData]);

  return (
    <div className="container order-status-page">
      <section className="order-status-page__form-container">
        <CheckStatusForm
          inputFontTheme="dark"
          inputBorderColor={formElementColor}
          buttonColor={formElementColor}
          headingColor={formElementColor}
          inputInitialValue={isNotObjectEmpty(orderData) && orderData._id}
        />
      </section>
      <Axis orderStage={orderStage} stages={orderMainStages} />
    </div>
  );
}
