import * as React from "react";

import classnames from "classnames";

import { Draggable } from "react-beautiful-dnd";

import { Form } from "./components";

import type { StageColor } from "../../../../../../../common/utils/types";
import type { OrderType } from "../../../../../../../../server/models/Order";
import type { StageListItem } from "../../../../../../../assets/stages";
import { CardModal } from "../CardModal/CardModal";
import { Icon } from "../../../../../../../common/react/components";

interface OwnProps {
  order: OrderType;
  index: number;
  stageColor: StageColor;
  substageList: StageListItem;
}

export function OrderCard({
  order,
  index,
  stageColor,
  substageList,
}: OwnProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { customerInfo, carInfo, orderDetails } = order;
  const { names } = customerInfo;
  const { licencePlate, model, make } = carInfo;
  const { orderNumber, stage } = orderDetails;
  const { id: subId, isFinished } = stage.sub;

  const labelColor = substageList[subId].color;
  const substageName = substageList[subId].name;

  function closeModal() {
    setIsModalOpen(false);
  }
  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <Draggable draggableId={`${orderNumber}`} index={index}>
      {(provided) => {
        return (
          <div
            className={classnames("board__order order-card", {
              "order-card--awaiting": isFinished,
            })}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="order-card__heading">
              <strong className="order-card__id">#{orderNumber}</strong>
              <span
                className="order-card__label label"
                style={{ backgroundColor: labelColor }}
              >
                {substageName}
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
            <Form
              color={stageColor}
              order={order}
              substageList={substageList}
            />
            <CardModal
              labelColor={labelColor}
              substageName={substageName}
              closeModal={closeModal}
              isOpen={isModalOpen}
              order={order}
            />
          </div>
        );
      }}
    </Draggable>
  );
}
