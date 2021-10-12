import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import { useLocation } from "react-router-dom";

import { FormEvent, useState } from "react";
import Select from "react-select";
import { StageColor } from "../../../../../common/utils/types";

import { Icon } from "../../../../../client/src/react/components/icons/Icon";
import { Buttons } from "./components";
import { sendUpdatedData } from "../Board/utils";
import { OrderType } from "../../../../../../server/models/Order";

interface OwnProps {
  order: OrderType;
  index: number;
  stageColor: StageColor;
  stage: {};
}

export function OrderCard({
  order,
  index,
  stageColor,
  stage,
}: OwnProps): JSX.Element {
  const [selectedSubStage, setSelectedSubStage] = useState(null);
  const { pathname } = useLocation();

  const selectOptions = Object.values(stage).map((item, i) => ({
    value: i,
    label: item,
  }));

  const { customerInfo, carInfo, orderDetails } = order;
  const { names } = customerInfo;
  const { licencePlate, model, make } = carInfo;
  const { orderNumber } = orderDetails;

  function handleSelectChange(currentSellected) {
    setSelectedSubStage(currentSellected);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendUpdatedData(
      {
        ...order,
        orderDetails: {
          ...orderDetails,
          stage: {
            ...orderDetails.stage,
            sub: selectedSubStage,
          },
        },
      },

      "orders",
      order._id
    );
  }

  return (
    <Draggable draggableId={`${orderNumber}`} index={index}>
      {(provided) => (
        <div
          className="board__order order-card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="order-card__heading">
            <strong className="order-card__id">#{orderNumber}</strong>
            <span className="order-card__label label">Kolor</span>
          </div>
          <div className="order-card__car">
            <Icon icon="car" size="sm" />
            <span className="ml-2 mr-1">
              {make} {model}
            </span>
            <span>{licencePlate}</span>
          </div>
          <div className="order-card__client">
            <Icon icon="person" size="sm" />
            <span className="ml-2">{names}</span>
          </div>
          <form onSubmit={handleSubmit}>
            <Select
              placeholder="wybierz sub-etap"
              options={selectOptions}
              value={selectedSubStage}
              onChange={handleSelectChange}
            />
          </form>
          {/* {!pathname.includes("zarzadzanie-zleceniami") && ( */}
          <Buttons color={stageColor} />
          {/* )} */}
        </div>
      )}
    </Draggable>
  );
}
