import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import type { StageColor } from "../../../../../../../common/utils/types";
import { AwaitingOrderType } from "../../../../../../../../server/models/AwaitingOrder";

import { Form } from "./components";
import { Icon } from "../../../../../../../common/react/components";

import { CardModal } from "../CardModal/CardModal";

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
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { customerInfo, carInfo, orderDetails, _id: id } = order;
  const { names } = customerInfo;
  const { licencePlate, model, make } = carInfo;
  const { orderNumber } = orderDetails;

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
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
          <div className="order-card__show-more-button-wrapper">
            <span
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (!isModalOpen && e.code !== "Tab") {
                  openModal();
                }
              }}
              onClick={() => {
                if (!isModalOpen) {
                  openModal();
                }
              }}
            >
              <Icon icon="show-more" />
            </span>
          </div>
          <Form color={color} cardId={id} columnId={columnId} />
          <CardModal
            closeModal={closeModal}
            isOpen={isModalOpen}
            order={order}
          />
        </div>
      )}
    </Draggable>
  );
}
