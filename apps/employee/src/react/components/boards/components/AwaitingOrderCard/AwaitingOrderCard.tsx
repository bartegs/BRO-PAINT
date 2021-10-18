import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import type { StageColor } from "../../../../../../../common/utils/types";
import { AwaitingOrderType } from "../../../../../../../../server/models/AwaitingOrder";

import { Icon } from "../../../../../../../client/src/react/components/icons/Icon";
import { Form } from "./components";

interface OwnProps {
  order: AwaitingOrderType;
  index: number;
  color: StageColor;
  columnId: string;
}

export function AwaitingOrderCard({
  order,
  index,
  color,
  columnId,
}: OwnProps): JSX.Element {
  const { customerInfo, carInfo, orderDetails, _id: id } = order;
  const { names } = customerInfo;
  const { licencePlate, model, make } = carInfo;
  const { orderNumber } = orderDetails;

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
          <Form color={color} cardId={id} columnId={columnId} />
        </div>
      )}
    </Draggable>
  );
}
