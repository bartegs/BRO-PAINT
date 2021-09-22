import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import { useLocation } from "react-router-dom";

import type { TaskType } from "../Board";
import { StageColor } from "../../../../../common/utils/types";

import { Icon } from "../../../../../client/src/react/components/icons/Icon";
import { Buttons } from "./components";

interface OwnProps {
  index: number;
  stageColor: StageColor;
}

type TaskCardType = TaskType & OwnProps;

export function TaskCard({
  taskId,
  carModel,
  clientName,
  licencePlate,
  index,
  stageColor,
}: TaskCardType): JSX.Element {
  const { pathname } = useLocation();

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
          {!pathname.includes("zarzadzanie-zleceniami") && (
            <Buttons color={stageColor} />
          )}
        </div>
      )}
    </Draggable>
  );
}
