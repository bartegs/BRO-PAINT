import * as React from "react";

import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { insertToArrayAt } from "../../../../../common/utils/functions";
import { TaskCard } from "../TaskCard";
import type { Service, Stage } from "../../pages";

export interface TaskType {
  id: string;
  taskId?: number;
  carModel: string;
  clientName: string;
  licencePlate: string;
  repairMainStage?: 0 | 1 | 2 | 3 | 4;
  repairSubStage?: number;
}

export type TasksType = { [key: number]: TaskType[] };
// tasks should be fetched in json
// ??? sorted by backended by stages before fetching and send in separate object of arrays

const data: TasksType = {
  0: [
    {
      id: "ec323888997",
      taskId: 1,
      carModel: "Fiat 126p",
      clientName: "Pekinczyk Bartka",
      licencePlate: "NLI2137",
      repairMainStage: 0, // ??? for colums
      repairSubStage: 3, // ?? for labels
    },
    {
      id: "ec328808998",
      taskId: 2,
      carModel: "Fiat 000p",
      clientName: "Kot Bartka",
      licencePlate: "NLI0000",
      repairMainStage: 0, // ??? for colums
      repairSubStage: 3, // ?? for labels
    },
  ],
  1: [
    {
      id: "ec328888997",
      taskId: 3,
      carModel: "Fiat 126p",
      clientName: "Pekinczyk Bartka",
      licencePlate: "NLI2137",
      repairMainStage: 1, // ??? for colums
      repairSubStage: 3, // ?? for labels
    },
    {
      id: "ec324552555",
      taskId: 4,
      carModel: "Audi Bartka",
      clientName: "Kot Barka",
      licencePlate: "NLI0000",
      repairMainStage: 1,
      repairSubStage: 4,
    },
  ],
  2: [
    {
      id: "ec32814444444",
      taskId: 5,
      carModel: "Fiat Bartka",
      clientName: "Testowy Test",
      licencePlate: "NLI1111",
      repairMainStage: 2,
      repairSubStage: 1,
    },
  ],
  3: [
    {
      id: "ec32844484444",
      taskId: 6,
      carModel: "Syrena Bartka",
      clientName: "Fifi Kowalski",
      licencePlate: "NLI1111",
      repairMainStage: 2,
      repairSubStage: 1,
    },
  ],
  4: [
    {
      id: "ec32844444444",
      taskId: 7,
      carModel: "Nowe Audi Bartka",
      clientName: "Kasia Kowalska",
      licencePlate: "NLI1111",
      repairMainStage: 2,
      repairSubStage: 1,
    },
  ],
};

type OwnProps = {
  stages: Service[] | Stage[];
};

export function Board({ stages }: OwnProps): JSX.Element {
  const [tasks, setTasks] = React.useState(data);

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const tasksCopy: TasksType = JSON.parse(JSON.stringify(tasks));

    const { source, destination, draggableId: draggableTaskId } = result;
    const { droppableId: columnIdFrom } = source;
    const { droppableId: columnIdTo, index: positionInTargetColum } =
      destination;
    const parsedDraggableTaskId = Number(draggableTaskId);
    const parsedColumIdFrom = Number(columnIdFrom);
    const parsedColumIdTo = Number(columnIdTo);

    const tasksWithMatchingStageFrom = tasksCopy[parsedColumIdFrom];
    const tasksWithMatchingStageTo = tasksCopy[parsedColumIdTo];

    const draggingTaskIndex = tasksWithMatchingStageFrom.findIndex(
      ({ taskId }) => taskId === parsedDraggableTaskId
    );

    const [splicedTask] = tasksWithMatchingStageFrom.splice(
      draggingTaskIndex,
      1
    );

    insertToArrayAt(
      tasksWithMatchingStageTo,
      positionInTargetColum,
      splicedTask
    );

    setTasks((prevState) => ({
      ...prevState,
      [parsedColumIdFrom]: tasksWithMatchingStageFrom,
      [parsedColumIdTo]: tasksWithMatchingStageTo,
    }));
  }

  return (
    <section className="board-page__board board">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {stages.map(({ id: columnId, title, color }) => (
          <Droppable key={columnId} droppableId={String(columnId)}>
            {(provided) => (
              <div
                className={`board__column board__column--${color}`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <div className="board__column-title">{title}</div>
                {tasks[columnId].map(
                  ({ id, taskId, carModel, clientName, licencePlate }, i) => (
                    <TaskCard
                      taskId={taskId}
                      id={id}
                      carModel={carModel}
                      clientName={clientName}
                      licencePlate={licencePlate}
                      key={taskId}
                      index={i}
                      stageColor={color}
                    />
                  )
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </section>
  );
}
