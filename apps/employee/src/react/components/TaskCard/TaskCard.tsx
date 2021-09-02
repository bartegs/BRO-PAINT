import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import { Icon } from "../../../../../client/src/react/components/icons/Icon";

import type { TaskType } from "../../pages/BoardPage/components";

interface OwnProps {
  index: number;
}

type TaskCardType = TaskType & OwnProps;

export function TaskCard({
  taskId,
  carModel,
  clientName,
  licencePlate,
  index,
}: TaskCardType): JSX.Element {
  return (
    <Draggable draggableId={`${taskId}`} index={index}>
      {(provided) => (
        <div
          className="board__task task-card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="task-card__heading">
            <strong className="task-card__id">#{taskId}</strong>
            <span className="task-card__label label">Kolor</span>
          </div>
          <div className="task-card__car">
            <Icon icon="car" size="sm" />
            <span className="ml-2 mr-1">{carModel}</span>
            <span>{licencePlate}</span>
          </div>
          <div className="task-card__client">
            <Icon icon="person" size="sm" />
            <span className="ml-2">{clientName}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
}
