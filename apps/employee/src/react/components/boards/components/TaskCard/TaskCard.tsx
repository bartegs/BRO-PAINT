import * as React from "react";

import { Draggable } from "react-beautiful-dnd";
import classnames from "classnames";
import { Icon } from "../../../../../../../client/src/react/components/icons/Icon";

import { Form } from "./components";

import type { StageColor } from "../../../../../../../common/utils/types";
import type { OrderType } from "../../../../../../../../server/models/Order";
import type { StageListItem } from "../../../../../../../assets/stages";

interface OwnProps {
  order: OrderType;
  index: number;
  stageColor: StageColor;
  substageList: StageListItem;
}

export function TaskCard({
  order,
  index,
  stageColor,
  substageList,
}: OwnProps): JSX.Element {
  const { customerInfo, carInfo, orderDetails } = order;
  const { names } = customerInfo;
  const { licencePlate, model, make } = carInfo;
  const { orderNumber, stage } = orderDetails;
  const { sub } = stage;
  const { id: subId } = sub;

  return (
    <Draggable isDragDisabled draggableId={`${orderNumber}`} index={index}>
      {(provided) => {
        return (
          <div
            className={classnames("board__order order-card", {
              "order-card--inactive": sub.isFinished,
            })}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="order-card__heading">
              <strong className="order-card__id">#{orderNumber}</strong>
              <span
                className="order-card__label label"
                style={{ backgroundColor: substageList[subId].color }}
              >
                {substageList[subId].name}
              </span>
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
            <Form color={stageColor} order={order} />
          </div>
        );
      }}
    </Draggable>
  );
}
