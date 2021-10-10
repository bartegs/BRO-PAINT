import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import { useLocation } from "react-router-dom";

import { StageColor } from "../../../../../common/utils/types";

import { Icon } from "../../../../../client/src/react/components/icons/Icon";
import { Buttons } from "./components";

interface OwnProps {
  orderNumber: number;
  make: string;
  carModel: string;
  names: string;
  licencePlate: string;
  index: number;
  stageColor: StageColor;
}

export function OrderCard({
  orderNumber,
  make,
  carModel,
  names,
  licencePlate,
  index,
  stageColor,
}: OwnProps): JSX.Element {
  const { pathname } = useLocation();

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
              {make} {carModel}
            </span>
            <span>{licencePlate}</span>
          </div>
          <div className="order-card__client">
            <Icon icon="person" size="sm" />
            <span className="ml-2">{names}</span>
          </div>
          {!pathname.includes("zarzadzanie-zleceniami") && (
            <Buttons color={stageColor} />
          )}
        </div>
      )}
    </Draggable>
  );
}
